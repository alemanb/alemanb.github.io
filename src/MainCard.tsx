import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  }  from "./components/ui/card"
import alemanb from "../public/alemanb.jpg"
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"
import { Separator } from "./components/ui/separator"

const MainCard = () => {
    return (
        <Card>
        <CardHeader>
            <CardTitle className="flex gap-4">
                <h1 className="">Benjamin Aleman</h1>
                <Avatar className="size-15">
                    <AvatarImage src={alemanb} alt="@alemanb"/>
                    <AvatarFallback></AvatarFallback>
                </Avatar>
            </CardTitle>
            <CardDescription>
                <h2 className="mb-2">Computer Science | Music Technology at Texas A&M University</h2>
                <div className = "flex h-5 items-center space-x-4">
                    <a href="../public/Benjamin_Aleman_2025.pdf" className="text-lg font-semibold">resume</a>
                    <Separator orientation="vertical"/>
                    <a href="https://www.github.com/alemanb" className="text-lg font-semibold">github</a>
                    <Separator orientation="vertical"/>
                    <a href="https://www.linkedin.com/in/benjamin-aleman-977854229/" className="text-lg font-semibold">linkedin</a>                
                </div>
            </CardDescription>
        </CardHeader>
        <CardContent className= "grid gap-4">
            <p>Howdy! I am currently a computer science student at Texas A&M University interested in
            software development and machine learning.</p>
            <img src="../public/primaryTAM.png" alt="" className=""/>
        </CardContent>
        <CardFooter>
        </CardFooter>
        </Card>  
    )
}

export default MainCard