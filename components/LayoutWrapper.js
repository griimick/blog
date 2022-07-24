import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
import Image from './Image';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

const LayoutWrapper = ({ children }) => {
	return (
		<SectionContainer>
			<div className="flex h-screen flex-col justify-between">
				<header className="flex items-center justify-between py-10">
					<div>
						<Link href="/" aria-label={siteMetadata.headerTitle}>
							<div className="flex items-center justify-between">
								<div className="mr-3 flex">
									<Image
										alt={'site logo'}
										src={siteMetadata.siteLogo}
										className="rounded-full object-cover object-center md:h-36 lg:h-48"
										width={60}
										height={60}
									/>
								</div>
								<div className="h-8 pr-2 text-3xl font-semibold text-gray-400 dark:text-gray-600">
									{'/'}
								</div>
								{typeof siteMetadata.headerTitle === 'string' ? (
									<div className="h-6 text-2xl font-bold">{siteMetadata.headerTitle}</div>
								) : (
									siteMetadata.headerTitle
								)}
							</div>
						</Link>
					</div>
					<div className="flex items-center text-base leading-5">
						<div className="hidden sm:block">
							{headerNavLinks.map((link) => (
								<Link
									key={link.title}
									href={link.href}
									className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
								>
									{link.title}
								</Link>
							))}
						</div>
						<ThemeSwitch />
						<MobileNav />
					</div>
				</header>
				<main className="mb-auto">{children}</main>
				<Footer />
			</div>
		</SectionContainer>
	);
};

export default LayoutWrapper;
