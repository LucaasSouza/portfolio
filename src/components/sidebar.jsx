// Nextjs e React
import Link from 'next/link';
import Image from "next/image";
// MUI e Bootstrap
import { Stack } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SideBar({ user }){
    const { avatar_url, login, bio, html_url } = user

    const redesSociais = [
        {
            icon: <GitHubIcon style={{ fontSize: 32 }} />,
            legend: 'Github',
            link: html_url
        },
        {
            icon: <LinkedInIcon style={{ fontSize: 32 }} />,
            legend: 'LinkedIn',
            link: '#'
        },
        {
            icon: <InstagramIcon style={{ fontSize: 32 }} />,
            legend: 'Instagram',
            link: '#'
        }
    ]

    return (
        <aside>
            <nav
                className="px-1 position-fixed h-100"
                style={{ backgroundColor: '#21222C', color: '#F8F8F2', width: 280 }}
            >
                <section className="text-center mt-4">
                    <Image
                        width={200}
                        height={200}
                        alt="Foto de perfil"
                        // src={avatar_url}
                        src="/img/user-default.png"
                        style={{ borderRadius: '100%' }}
                    />

                    <h3 className="my-3">
                        @{ login }
                    </h3>

                    <p>{ bio }</p>
                </section>

                <section className="position-absolute bottom-0 mb-3 mx-3">
                    <Stack spacing={1.5}>
                        {
                            redesSociais.map(data => (
                                <Link
                                    key={data.legend}
                                    href={ data.link }
                                    target="_blank"
                                    style={{
                                        color: '#F8F8F2',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <section className="d-flex" style={{ gap: 8 }}>
                                        { data.icon }
                                        <p style={{ marginTop: '6px' }}>
                                            { data.legend }
                                        </p>
                                    </section>
                                </Link>
                            ))
                        }
                    </Stack>
                </section>
            </nav>
        </aside>
    )
}

export const SidebarMobile = ({ user, width }) => {
    const { avatar_url, login, html_url } = user

    const redesSociais = [
        {
            icon: <GitHubIcon style={{ fontSize: 32 }} />,
            legend: 'Github',
            link: html_url
        },
        {
            icon: <LinkedInIcon style={{ fontSize: 32 }} />,
            legend: 'LinkedIn',
            link: '#'
        },
        {
            icon: <InstagramIcon style={{ fontSize: 32 }} />,
            legend: 'Instagram',
            link: '#'
        }
    ]

    return (
        <>
            <div style={{ color: '#F8F8F2' }} className={`p-2 d-flex justify-content-between`}>
                <section className='p-1'>
                    <Image
                        width={70}
                        height={70}
                        alt="Foto de perfil"
                        // src={avatar_url}
                        src="/img/user-default.png"
                        style={{ borderRadius: '100%' }}
                    />
                </section>

                <section className='d-flex flex-column'>
                    <h5 className='m-0 py-2'>
                        @{login} • PortFólio
                    </h5>

                    <section className='text-end'>
                        {
                            redesSociais.map(r => (
                                <Link key={r.legend} href={r.link} target="_blank" style={{ color: '#F8F8F2', marginLeft: 8 }}>
                                    { r.icon }
                                </Link>
                            ))
                        }
                    </section>
                </section>
            </div>

            <hr style={{ color: '#F8F8F2', margin: 0, padding: 0 }} />
        </>
    )
}
