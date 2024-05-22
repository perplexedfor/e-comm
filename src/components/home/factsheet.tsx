import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  const head = [
    "Basic Information",
    "Statutory Profile",
    "Payment and Shipment Details",
  ]
  const tables = [
    {
      Nature_of_Bussiness: "Exporter and Manufacturer",
      Additional_Bussiness: "Wholesaler, Trader, Supplier, Exporter",
      Company_CEO: "Lalit Goyal",
      Total_number_of_employees: "40-50 people",
     Year_of_Establishment: "2012",
     Legal_status_of_firm: "Individual - Proprietor",
        Annual_Turnover: "Above 3 crore",
    },
    {
      Import_Export_Code: "ABSPG2553P",
      Banker: "Bank of Baroda, AXIS Bank",
      GST_number: "07ABSPG2553P1Z2",
    },
    {
      Payment_Method: "Cash, Cheque, Credit Card, DD, Online",
    Shipment_Mode: "By Road",
    },
  ]
   
  export function Factsheet() {
    return (
        <div>
            {
            tables.map((table,index) => (
                <Table>
                  <TableHead className="text-lg md:text-xl lg:text-2xl underline decoration-2">{head[index]}</TableHead>
                  <TableBody>
                    {Object.entries(table).map(([key, value]) => (
                      <TableRow key={key} className="hover:bg-teal-400">
                        <TableCell className="font-medium">{key.replace(/_/g, " ")}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ))
            } 
      {/* <Table>
        <TableCaption>Basic Information</TableCaption> */}
        {/* <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader> */}
        {/* <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table> */}
      </div>
    )
  }