import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  }  from "./components/ui/card"


const MainCard = () => {
    return (
        <Card>
        <CardHeader>
            <CardTitle>
                <h1 className="">Benjamin Aleman</h1>
            </CardTitle>
            <CardDescription>
                <h2 className="">Computer Science | Music Technology at Texas A&M University</h2>
                <div className="grid grid-cols-4">
                    <a href="">resume</a>
                    <a href="https://www.github.com/alemanb">github</a>
                    <a href="https://www.linkedin.com/notifications/?filter=all">linkedin</a>
                </div>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p>Howdy! I am currently a computer science student at Texas A&M University interested in
            software development and machine learning.</p>
        </CardContent>
        <CardFooter>
        </CardFooter>
        </Card>  
    )
}

export default MainCard