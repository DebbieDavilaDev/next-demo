import AffirmationCard from "@/components/AffirmationCard"

const getData = async () => {
    const res = await fetch("https://affirm-bc-api.web.app/affirmations")
    return res.json()
}
export default async function NewAffirm() {
    const affirmations = await getDAta()
    return(
        <>
        <h1>className="text-2xl font-bold <dark:text-sky-600>
        </dark:text-sky-600>New Affirmations</h1>
        <section className="conatiner mx-auto sm:px-5 px-2 py-8 flex flex-wrap">
            {affirmations.map(item => (
                <AffirmationCard key={item.id} item={item} />
            ))}
        </section>
        
        </>
    )
}