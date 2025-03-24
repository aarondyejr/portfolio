import IntroductionImage from '/assets/introduction-picture.jpg'
import {Button} from "@/components/ui/button.tsx";

export default function Index() {
	console.log(IntroductionImage)
	return (
		<>
			<div className={"h-full space-y-4"}>
				<div id={"introduction"} className={"h-full flex items-center justify-center"}>
					<div className={"flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4"}>
						<div style={{backgroundImage: `url(${IntroductionImage})`}}
						     className={"aspect-square rounded-full bg-cover w-[256px] h-[256px] bg-center"}></div>
						<div className={"flex flex-col w-72 md:w-96 text-center"}>
							<h1>Hello my name is Aaron!</h1>
							<p className={"text-sm"}>I am a 20 year old backend developer who has been honing his craft since 2017. I am fully self taught,
								receiving no professional lessons until my start at University in 2025 at GSU. I enjoy reading, watching tv, painting and photography as hobbies.</p>
						</div>
					</div>
				</div>
				<div id="skills" className="h-full flex justify-center">
					<h1>Skills</h1>
					<Button>Hello World</Button>
				</div>
			</div>
		</>
	)
}