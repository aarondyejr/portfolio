import IntroductionImage from '/assets/introduction-picture.jpg'
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Progress} from "@/components/ui/progress.tsx";

export default function Index() {
	function getAge() {
		const today = new Date();
		const birthDate = new Date(1099705050000);
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	return (
		<>
			<div className={"h-full space-y-4"}>
				<div id={"introduction"} className={"h-full flex items-center justify-center"}>
					<div className={"flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4"}>
						<div style={{backgroundImage: `url(${IntroductionImage})`}}
						     className={"aspect-square rounded-full bg-cover w-[300px] h-[300px] bg-center"}></div>
						<div className={"flex flex-col w-80 md:w-[50rem] text-center space-y-2"}>
							<h1>Hello my name is Aaron!</h1>
							<p className={"text-sm"}>
								I am a {getAge()} year old backend developer with a strong passion for software engineering, actively refining my skills since 2017.
								As a self-taught programmer, I have gained extensive experience in backend development, continuously expanding my knowledge through hands-on projects and independent learning.
								In 2025, I began my formal education at Georgia State University to further enhance my expertise. Outside of development, I enjoy reading, watching television, painting, and photography.
							</p>
						</div>
					</div>
				</div>
				<div id="skills" className="h-full w-full flex flex-col items-center space-y-8">
					<h1>Skills</h1>
					<Card className={"w-full md:w-1/2 p-4 bg-primary/60"}>
						<CardHeader className={"flex justify-center"}>
							<span>Programming Languages</span>
						</CardHeader>
						<CardContent className={"flex flex-col items-center"}>
							<div className={"grid grid-cols-2 space-y-8 w-full gap-x-4"}>
								<div>
									<Label htmlFor={"typescript"}>TypeScript</Label>
									<Progress className={"bg-secondary"} id={"typescript"} value={65}/>
								</div>
								<div>
									<Label htmlFor={"csharp"}>C#</Label>
									<Progress className={"bg-secondary"} id={"csharp"} value={20}/>
								</div>
								<div>
									<Label htmlFor={"rust"}>Rust</Label>
									<Progress className={"bg-secondary"} id={"rust"} value={40}/>
								</div>
								<div>
									<Label htmlFor={"java"}>Java</Label>
									<Progress className={"bg-secondary"} id={"java"} value={5}/>
								</div>
								<div>
									<Label htmlFor={"python"}>Java</Label>
									<Progress className={"bg-secondary"} id={"python"} value={50}/>
								</div>

							</div>
						</CardContent>
					</Card>
					<h1 id={"projects"}>Projects</h1>
					<Card className={"w-full md:w-1/2 p-4 bg-primary/60"}>
						<CardHeader className={"flex justify-center"}>
							<span>Projects</span>
						</CardHeader>
						<CardContent className={"flex flex-col items-center"}>

						</CardContent>
					</Card>
				</div>
			</div>
		</>
	)
}