import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

export default function PublisherRates() {
  return (
    <section id="publisher-rates" className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Publisher Rates</CardTitle>
          <CardDescription className="text-center">Earn money for every 1000 views on your shortened links</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Package Description / Country</TableHead>
                <TableHead>Desktop Earnings (per 1000 Views)</TableHead>
                <TableHead>Mobile / Tablet Earnings (per 1000 Views)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Worldwide Deal (All Countries)</TableCell>
                <TableCell>$2.500</TableCell>
                <TableCell>$2.500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>
            View Full Rate Table
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}