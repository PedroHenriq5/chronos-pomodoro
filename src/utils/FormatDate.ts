import { format } from "date-fns";

function FormatDate(date: number) {
    return(
        format(new Date(date), "yyyy-MM-dd HH:mm")
    )
}

export default FormatDate;