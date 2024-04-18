
import {
    EllipsisHorizontalIcon,
    CheckCircleIcon
  } from '@heroicons/react/24/outline';

const iconMap = {
    inprogress: EllipsisHorizontalIcon,
    completed: CheckCircleIcon
}
export function Card({count, status}: {count : string, status: string}){
return(
    <>
    {/* call individual card to show in-progress, completed tasks */}
    </>
);
}