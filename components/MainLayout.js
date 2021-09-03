import Link from 'next/link'
import classes from '../styles/MainLayout.module.scss'
import {useRouter} from "next/router"
import useTranslation from "next-translate/useTranslation";

export function MainLayout({children}) {
    const router = useRouter()
    const { locale, locales } = router
    const { t } = useTranslation()

    const handleSelect = (e) => {
        router.push(router.route, router.asPath, { locale: e.target.value })
    }

    return (
        <div className={classes.wrapper}>
            <nav className={classes.nav}>
                <p><Link href={'/'}><a>{t("common:blogAbout")}</a></Link></p>
                <p><Link href={'/news'}><a>{t("common:NatureNews")}</a></Link></p>
                <select className={classes.locale} value={locale} onChange={handleSelect}>
                    {locales.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}