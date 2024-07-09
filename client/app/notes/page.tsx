async function getAPI(){

    const res = await fetch("https://api.restful-api.dev/objects", {cache: 'no-store'})
    const data = await res.json()
    return data as any[]
}

export default async function NotesPage() {

    const data = await getAPI();
    console.log(data)

  return (
    <div>

        <h1 className="text-2xl font-bold">Api Test</h1>

        <div>
            {data?.map((data) => {
                return <div key={data.id}>{data.name}</div>
            })}
        </div>
      
    </div>
  ) 

}
