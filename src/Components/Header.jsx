import TodoAddField from "./TodoAddField";

export default function Header(){
    return(
        <div className="w-full flex flex-col gap-y-4 items-center">
            <h1 className="text-white text-2xl font-bold">Manage Your Todos</h1>
            <TodoAddField/>
        </div>
    )
}