import {Menu, Scroll} from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
	DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

export default function Navbar() {
	return(
		<>
			<div className={"w-full flex flex-row justify-between items-center p-4"}>
				<div className={"hidden md:block"}>
					<h1>Aaron Dye Jr</h1>
				</div>
				<div className={"hidden md:block"}>
					<div className={"flex flex-row gap-4"}>
						<a href="#skills">Skills</a>
					</div>
				</div>
				<div className={"block md:hidden"}></div>
				<div className={"block md:hidden"}>
					<DropdownMenu>
						<DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
						<DropdownMenuContent className={"mx-4"}>
							<DropdownMenuLabel>Portfolio Sections</DropdownMenuLabel>
							<DropdownMenuSeparator/>
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Scroll />
									<span>Skills</span>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</>
	)
}