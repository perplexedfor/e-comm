import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const factsheetData = [
  {
    title: "Basic Information",
    data: {
      "Nature of Business": "Exporter and Manufacturer",
      "Additional Business": "Wholesaler, Trader, Supplier, Exporter",
      "Company CEO": "Lalit Goyal",
      "Total Employees": "40-50 people",
      "Year of Establishment": "2012",
      "Legal Status of Firm": "Individual - Proprietor",
      "Annual Turnover": "Above 3 crore",
    },
  },
  {
    title: "Statutory Profile",
    data: {
      "Import Export Code": "ABSPG2553P",
      "Banker": "Bank of Baroda, AXIS Bank",
      "GST Number": "07ABSPG2553P1Z2",
    },
  },
  {
    title: "Payment and Shipment Details",
    data: {
      "Payment Method": "Cash, Cheque, Credit Card, DD, Online",
      "Shipment Mode": "By Road",
    },
  },
]

export function Factsheet() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Company Factsheet</h2>
        <div className="space-y-8">
          {factsheetData.map((section, index) => (
            <Table key={index}>
              <TableHeader>
                <TableRow>
                  <TableHead colSpan={2} className="text-lg font-semibold">
                    {section.title}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(section.data).map(([key, value], index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ))}
        </div>
      </div>
    </section>
  )
}

