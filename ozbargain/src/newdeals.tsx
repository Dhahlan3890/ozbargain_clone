import { DealCard } from "./dealcard";

export function NewDeals () {
    return (
        <>
        <div id="card-set-container-new">
        <div id="card-set-new">
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
        </div>
        </div>

        <div id="card-set-container-new" style={{marginTop:"2.5rem"}}>
        <div id="card-set-new-left">
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
            <DealCard/>
        </div>
        </div>
        </>
    );
}