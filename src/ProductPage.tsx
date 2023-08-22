import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import NavBar from "./NavBar";
import "./ProductPage.css";

//example data type
type Person = {
  companyName: string;
  country: string;
  product: string;
  link: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    companyName: "MireBobbin",
    country: "Korea",
    product: "Spinning Bobbins",
    link:"https://www.mirebobbin.com",
  },
  {
    companyName: "Biotti",
    country: "Italy",
    product: "Metallic Card Clothing",
    link:"https://www.biotti.it",
  },
  {
    companyName: "Kartex",
    country: "China",
    product: "All Types of Spinning Spindles",
    link:"http://www.kartex.cn",
  },
  {
    companyName: "Asteks",
    country: "Turkey",
    product: "High End Rubber Cots and Aprons",
    link:"http://www.asteks.com",
  },
  {
    companyName: "Tikemumessillik",
    country: "Turkey",
    product: "Twisting/Doubling Machines and High End Textile Spare Parts",
    link:"http://www.tikemumessillik.com",
  },
  {
    companyName: "Perfect Equipments",
    country: "India",
    product:
      "Carding Workshop, Roller Cover Workshop Machines, waste recycling lines",
      link:"https://www.perfectequipments.com",
  },
  {
    companyName: "DMComp",
    country: "China",
    product: "Two Stage Energy Saving Air Compressors",
    link:"https://www.dmcomp.com",
  },
  {
    companyName: "Bonino1913",
    country: "Italy",
    product: "Recycling Lines, opening and blending",
    link:"https://www.bonino1913.it",
  },
  {
    companyName: "NestlingTech",
    country: "India",
    product: "Contamination Sorter, Spindle Monitoring, AI Based Cop Sorting",
    link:"https://www.nestlingtech.com",
  },
  {
    companyName: "Naren Group",
    country: "India",
    product:
      "High End Spare Parts Mechanical and Electronics from Blow Room To Winding",
    link:"https://www.narengroup.in",
  },
  {
    companyName: "Al Anayat",
    country: "Pakistan",
    product:
      "High End Energy Saving Air Conditioning and Waste Collection Systems",
    link:"https://www.alanayat.com",
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
        Cell: (props) => {
          return (
            <p style={{ textDecoration : "underline", color: "blue", cursor: "pointer"}} onClick={() => {window.open(`${props.row.original.link}`, "_blank")}}>
              {props.row.original.companyName}
            </p>
          );
        }
      },
      {
        accessorKey: "country", //access nested data with dot notation
        header: "Country",
        enableClickToCopy: true,
        size: 50,
      },
      {
        accessorKey: "product",
        header: "Products",
        enableClickToCopy: true,
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
          muiTableBodyCellProps={( ) => ({
            sx: {
              fontSize: "2rem",
            },
          })}
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
