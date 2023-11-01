import Link from 'next/link';
import Image from 'next/image';
import { Card, Typography, CardContent } from '@mui/material';

export default function RepoCard({ repositorio }) {
    const { name, created_at, pushed_at, language, html_url } = repositorio

    const formatDate = date => new Date(date).toLocaleString()

    const replaceChars = variable => {
        const chars = ['-', '_']
        chars.forEach(char => variable = variable.replaceAll(char, ' '))
        return variable
    }

    const cardMedia = lang => (
        <div style={{ position: 'relative', top: 0, left: 0, width: 345 }}>
            <Image width={345} height={140} alt="Banner" src="/img/logo/banner.jpg" />

            <div style={{ top: 12, right: 12, position: 'absolute' }}>
                <Image
                    width={0}
                    height={0}
                    sizes={90}
                    alt={"Language " + lang}
                    style={{ width: 90, height: 'auto' }}
                    src={"/img/logo/" + (lang.replaceAll('#', 's')) + "-banner.png"}
                />
            </div>
        </div>
    )

    return (
        <Card sx={{ width: 345, border: '1px solid #F8F8F2' }}>
            <Link
                href={ html_url }
                target="_blank"
                style={{
                    color: '#212121',
                    textDecoration: 'none'
                }}
            >
                { cardMedia(language.toLowerCase()) }

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { replaceChars(name) }
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Criado em { formatDate(created_at) } <br />
                        Atualizado em { formatDate(pushed_at) }
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}