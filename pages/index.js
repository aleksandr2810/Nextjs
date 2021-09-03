import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import classes from '../styles/index.module.scss'
import useTranslation from "next-translate/useTranslation";


export default function Index() {

    const { t } = useTranslation()


    return (
        <MainLayout>
            <Head>
                <title>Blog News</title>
                <meta name="keywords" content="blog, news"/>
                <meta charSet="utf-8"/>
            </Head>

            <div>
                <h1 className={classes.main}>{t("common:HomePage")}</h1>
                <div className={classes.content}>
                    <div className={classes.item}>
                        <h2>{t("common:NatureOfUkraine")}</h2>
                        <p>{t("common:NatureOfUkraineText")}
                        </p>
                    </div>
                    <div className={classes.item}>
                        <p><Link href={'/news'}><a>{t("common:News")}</a></Link></p>
                        <p>{t("common:NewsText")}</p>
                    </div>
                    <div className={classes.item}>
                        <h2>{t("common:littleAboutUs")}</h2>
                        <p>{t("common:littleAboutUsText")}
                        </p>
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}