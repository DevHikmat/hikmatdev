import { memo } from "react"
import { useTranslation } from "react-i18next"
const Footer = () => {
  const {t} = useTranslation('footer')
  return (
    <footer>
        <p>{t("text")}</p>
    </footer>
  )
}
export default memo(Footer)
