import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const note = {
    id: "1",
    title: "My Note Title",
    content:
        "This is the content of my note that I want to display inside a card.",
};

export default function Notes() {
    return (
        <div className="p-4 flex flex-col justify-center items-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="font-mono">{note.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="font-mono">{note.content}</p>
                </CardContent>
            </Card>
        </div>
    );
}
