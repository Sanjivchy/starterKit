import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div>{t('about')}</div>
  )
}

export default About