import React from 'react'
import InfoItem from './InfoItem'
import { InfoItemPropsType } from '../../types'
interface InfoListDataType {
  infoListData: InfoItemPropsType[]
}
const InfoList:React.FC<InfoListDataType> = ({infoListData}) => {
  return (
    <div className="info-container">
        {infoListData.map(item => <InfoItem key={String(Math.random())} item={item} />)}
      </div>
  )
}
export default InfoList