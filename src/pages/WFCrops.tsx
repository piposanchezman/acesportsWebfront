import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { TableV3 } from "../components/TableV3";
import { UseGet } from "../hooks/UseGet";
import { ApiContext } from "../context/ApiContext";
import { createNewWaterFootprint } from "../services/water_footprint_s";
import { fetchCropDetails } from "../services/crop_s";
import { updateCollectionStatus } from "../services/collection_s";
import { Crop } from "../interfaces/crop";
import { Collection } from "../interfaces/collection";
import { Text } from "../styles/HomeStyles";
import {
  RegisterFormContainer,
  InfoContainer,
  DetailsSign,
  DetailsItem,
} from "../styles/lotscropsStyles";
import stopCollection from "../assets/icons/stopCollection.svg";

export const WFCrops: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const collectionId = id || "";
  const { backendApiCall, serviceIsReady } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const { data, loading, setRefetch } = UseGet({
    endpoint: `v1/collection/info/crop/${collectionId}/paginated?page=${currentPage}&limit=${rowsPerPage}`,
  });
  const [cropData, setCropData] = useState({} as Crop);

  useEffect(() => {
    const fetchCropData = async () => {
      const response = await fetchCropDetails(backendApiCall, collectionId);
      if (response.status === "success" && response.data) {
        setCropData(response.data);
      }
    };

    if (serviceIsReady) {
      fetchCropData();
    }
  }, [collectionId, serviceIsReady]);

  const formattedCollections = data?.collections?.map(
    (collection: { createdAt: string | number | Date; updatedAt: string | number | Date }) => ({
      ...collection,
      createdAt: new Date(collection.createdAt).toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      updatedAt: new Date(collection.updatedAt).toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    })
  );
  const handleUpdateCollectionStatus = async (collectionId: string, crop_id: string) => {
    try {
      const response = await updateCollectionStatus(backendApiCall, collectionId, {
        crop_id: crop_id,
        status: "completed",
      });
      if (response.status === "success") {
        setRefetch((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCreateNewWaterFootprint = async (collectionId: string, crop_id: string) => {
    try {
      const response = await createNewWaterFootprint(backendApiCall, {
        collection_id: collectionId,
        crop_id: crop_id,
      });
      if (response.status === "success") {
        setRefetch((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MainLayout>
      <Text>Recolecciones del cultivo '{cropData.name}'</Text>
      <RegisterFormContainer>
        <InfoContainer>
          <DetailsSign $custom3>
            Área: <DetailsItem>{cropData.area} Ha</DetailsItem>
          </DetailsSign>
          <DetailsSign $custom3>Historial de registros:</DetailsSign>
        </InfoContainer>
      </RegisterFormContainer>
      {!loading && formattedCollections && (
        <TableV3
          evencolor="#FFFFFF"
          oddcolor="rgb(255, 103, 15, 0.2)"
          columns={["id", "Nombre", "Fecha Inicio", "Fecha Fin", "Acciones"]}
          columnMapping={{
            Nombre: "name",
            "Fecha Inicio": "createdAt",
            "Fecha Fin": "updatedAt",
          }}
          data={formattedCollections}
          pagination={{
            currentPage,
            setCurrentPage,
            rowsPerPage,
            setRowsPerPage,
            setRefetch,
            totalPages: data?.meta?.total_pages,
          }}
          actions={{
            update: {
              icon: stopCollection,
              action: (item: Collection) => {
                const { _id, crop_id, status } = item;
                if (status === "in_progress") {
                  handleUpdateCollectionStatus(_id, crop_id);
                } else {
                  handleCreateNewWaterFootprint(_id, crop_id);
                  navigate(`/lot-menu/water-footprint/crops/comp/${_id}`);
                }
              },
            },
          }}
        />
      )}
    </MainLayout>
  );
};

export default WFCrops;
