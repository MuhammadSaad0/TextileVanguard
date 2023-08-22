import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import NavBar from "./NavBar";
import "./ProductPage.css";

//example data type
type Person = {
  companyName: string;
  country: string;
  product: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    companyName: "MireBobbin",
    country: "Korea",
    product: "Spinning Bobbins",
  },
  {
    companyName: "Biotti",
    country: "Italy",
    product: "Metallic Card Clothing",
  },
  {
    companyName: "Kartex",
    country: "China",
    product: "All Types of Spinning Spindles",
  },
  {
    companyName: "Asteks",
    country: "Turkey",
    product: "High End Rubber Cots and Aprons",
  },
  {
    companyName: "Tikemumessillik",
    country: "Turkey",
    product: "Twisting/Doubling Machines and High End Textile Spare Parts",
  },
  {
    companyName: "Perfect Equipments",
    country: "India",
    product:
      "Carding Workshop, Roller Cover Workshop Machines, waste recycling lines",
  },
  {
    companyName: "DMComp",
    country: "China",
    product: "Two Stage Energy Saving Air Compressors",
  },
  {
    companyName: "Bonino1913",
    country: "Italy",
    product: "Recycling Lines, opening and blending",
  },
  {
    companyName: "NestlingTech",
    country: "India",
    product: "Contamination Sorter, Spindle Monitoring, AI Based Cop Sorting",
  },
  {
    companyName: "Naren Group",
    country: "India",
    product:
      "High End Spare Parts Mechanical and Electronics from Blow Room To Winding",
  },
  {
    companyName: "Al Anayat",
    country: "Pakistan",
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
