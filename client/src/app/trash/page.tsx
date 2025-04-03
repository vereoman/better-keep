import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

const trashed = {
    id: "1",
    title: "Deleted Note",
    content:
        "This is a note that has been moved to trash and will be permanently deleted after 30 days.",
};

export default function Trash() {
    return (
        <div className="p-4 flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="font-mono">
                        {trashed.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="font-mono">{trashed.content}</p>
                </CardContent>
            </Card>
        </div>
    );
}
