import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  }  from "./components/ui/card"
import alemanb from "../public/alemanb.jpg"
import resume from "../public/Benjamin_Aleman_2025.pdf"
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"
import { Separator } from "./components/ui/separator"
import { ScrollArea } from "./components/ui/scroll-area"

const MainCard = () => {
    return (
        <Card className="">
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
                    <a href={resume} className="text-lg font-semibold">resume</a>
                    <Separator orientation="vertical"/>
                    <a href="https://www.github.com/alemanb" className="text-lg font-semibold">github</a>
                    <Separator orientation="vertical"/>
                    <a href="https://www.linkedin.com/in/benjamin-aleman-977854229/" className="text-lg font-semibold">linkedin</a>                
                </div>
            </CardDescription>
        </CardHeader>
        <CardContent className= "grid">
            <p>Howdy! I am currently a sophmore computer science student at Texas A&M University interested in software development and machine learning.</p>
            <br></br>
            <p className="text-sm text-muted-foreground">shh.. hey, scroll me</p>
            <ScrollArea className="bg-red-200 h-43 rounded-md p-4">
                <h2 className="border-b-2 border-red-400">projects</h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li><div className="font-semibold">This website!</div> | Typescript, React, Shadcn</li>
                    <li><div className="font-semibold">CV-Theremin</div> | C++, JUCE, OpenCV</li>
                    <li><div className="font-semibold">DummyStocks</div> | TypeScript, Python, React, Flask, OpenAI, pandas</li>
                </ul>
                <h2 className="border-b-2 border-red-400">about me</h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Im trying to become a professional cook! (not really)</li>
                    <li>Have really gotten into dungeons and dragons</li>
                    <li>I also like to make electronic music in my spare time</li>
                </ul>
            </ScrollArea>   
            {/* <img src={tamulogo} alt="" className=""/> */}
        </CardContent>
        <CardFooter>
        </CardFooter>
        </Card>  
    )
}

export default MainCard