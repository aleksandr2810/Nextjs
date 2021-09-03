import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import classes from '../styles/news.module.scss'
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";


export default function News({news}) {

    const { t } = useTranslation()


    return (
        <MainLayout>
            <Head>
                <title>News</title>
            </Head>
            <h1 className={classes.news}>{t("common:PageNews")}</h1>
            <ul className={classes.items}>
                {news.map(item => (<li key={item.id}>
                        <Link href={`/new/[id]`} as={`/new/${item.id}`}>
                            <a>{item.title}</a>
                        </Link>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

News.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/news-${ctx.locale}`)
    const news = await response.json()

    return {
        news
    }
}