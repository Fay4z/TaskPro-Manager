/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ahwylw9XOJl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ahwylw9XOJl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TasksTable() {
  return (
    <div className="mx-auto w-full max-w-6xl p-10">
      <Card>
        <CardHeader className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-bold">Tasks</CardTitle>
            <Button
              className="h-6 w-6 rounded-full"
              size="icon"
              variant="ghost"
            >
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">Add a new task</span>
            </Button>
          </div>
          <div className="flex items-center gap-2 md:ml-auto md:gap-4 lg:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex items-center gap-2 text-xs font-normal py-1.5.5"
                  id="filter"
                  size="sm"
                  variant="outline"
                >
                  <FilterIcon className="h-3 w-3 -translate-y-0.5" />
                  Filter
                  <ChevronDownIcon className="h-3 w-3 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioItem name="filter" value="all">
                  All
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem name="filter" value="open">
                  Open
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem name="filter" value="completed">
                  Completed
                </DropdownMenuRadioItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="hidden md:flex" size="sm">
              Clear completed
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-3/12">Title</TableHead>
                <TableHead className="w-2/12">Status</TableHead>
                <TableHead className="w-2/12">Priority</TableHead>
                <TableHead className="w-2/12">Assignee</TableHead>
                <TableHead className="w-3/12 text-right">Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Design new homepage
                </TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="outline">
                    Open
                  </Badge>
                </TableCell>
                <TableCell>High</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell className="text-right">Today</TableCell>
                <Button>Edit Task</Button>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Implement new feature set
                </TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="outline">
                    Open
                  </Badge>
                </TableCell>
                <TableCell>High</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell className="text-right">Tomorrow</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Fix mobile responsiveness
                </TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="outline">
                    Open
                  </Badge>
                </TableCell>
                <TableCell>Low</TableCell>
                <TableCell>Adam Johnson</TableCell>
                <TableCell className="text-right">Today</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Update product documentation
                </TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="outline">
                    Completed
                  </Badge>
                </TableCell>
                <TableCell>Low</TableCell>
                <TableCell>Emily Brown</TableCell>
                <TableCell className="text-right">Yesterday</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Launch marketing campaign
                </TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="outline">
                    Open
                  </Badge>
                </TableCell>
                <TableCell>High</TableCell>
                <TableCell>Mark Davis</TableCell>
                <TableCell className="text-right">2 days</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
