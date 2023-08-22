import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import Flag from "react-world-flags";
import NavBar from "./NavBar";
import "./ProductPage.css";

//example data type
type Person = {
  companyName: string;
  country: Element;
  product: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    companyName: "MireBobbin",
    country: <Flag code="kor" height="28" />,
    product: "Spinning Bobbins",
  },
  {
    companyName: "Biotti",
    country: <Flag code="ita" height="28" />,
    product: "Metallic Card Clothing",
  },
  {
    companyName: "Kartex",
    country: <Flag code="chn" height="28" />,
    product: "All Types of Spinning Spindles",
  },
  {
    companyName: "Asteks",
    country: <Flag code="tur" height="28" />,
    product: "High End Rubber Cots and Aprons",
  },
  {
    companyName: "Tikemumessillik",
    country: <Flag code="tur" height="28" />,
    product: "Twisting/Doubling Machines and High End Textile Spare Parts",
  },
  {
    companyName: "Perfect Equipments",
    country: <Flag code="ind" height="28" />,
    product:
      "Carding Workshop, Roller Cover Workshop Machines, waste recycling lines",
  },
  {
    companyName: "DMComp",
    country: <Flag code="chn" height="28" />,
    product: "Two Stage Energy Saving Air Compressors",
  },
  {
    companyName: "Bonino1913",
    country: <Flag code="ita" height="28" />,
    product: "Recycling Lines, opening and blending",
  },
  {
    companyName: "NestlingTech",
    country: <Flag code="ind" height="28" />,
    product: "Contamination Sorter, Spindle Monitoring, AI Based Cop Sorting",
  },
  {
    companyName: "Naren Group",
    country: <Flag code="ind" height="28" />,
    product:
      "High End Spare Parts Mechanical and Electronics from Blow Room To Winding",
  },
  {
    companyName: "Al Anayat",
    country: <Flag code="pak" height="28" />,
    product:
      "High End Energy Saving Air Conditioning and Waste Collection Systems",
  },
];

const ProductPage = () => {
  //should be memoized or stable

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "companyName", //access nested data with dot notation
        header: "Company",
        size: 150,
      },
      {
        accessorKey: "country", //access nested data with dot notation
        header: "Country",
        size: 50,
      },
      {
        accessorKey: "product",
        header: "Products",
        size: 250,
      },
    ],
    []
  );

  return (
    <>
      <div id="navBarDiv">
        <NavBar />
      </div>
      <div id="prodTable">
        <MaterialReactTable
          columns={columns}
          data={data}
          muiTableHeadCellProps={{
            sx: {
              fontSize: "2.2rem",
              "& .Mui-TableHeadCell-Content-Wrapper": {
                overflow: "visible",
              },
              "& .css-68rqdf": {
                overflow: "visible",
              },
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              fontSize: "2rem",
            },
          }}
          muiTableHeadCellColumnActionsButtonProps={{
            sx: {
              "& .css-epvm6": {
                width: "4rem",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default ProductPage;
