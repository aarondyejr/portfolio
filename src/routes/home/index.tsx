import IntroductionImage from '/assets/introduction-picture.jpg'

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
			</div>
		</>
	)
}