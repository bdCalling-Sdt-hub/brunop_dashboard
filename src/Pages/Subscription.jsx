import { BsArrowLeftShort } from "react-icons/bs"
import SubscriptionTable from "../Components/SubscriptionTable/SubscriptionTable"



const Subscription = () => {
    return (
        <div className="p-2 shadow-md">
            <div className="flex items-center gap-2 pb-5">
                <BsArrowLeftShort />
                <h1 className="">Subscription</h1>
            </div>
            <SubscriptionTable/>
        </div>
    )
}

export default Subscription