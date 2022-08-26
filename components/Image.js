import NextImage from 'next/image';
import { useTheme } from 'next-themes';

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ srcDark = '', ...rest }) => {
	const { theme } = useTheme();
	const src = srcDark && theme === 'dark' ? srcDark : rest.src;

	return <NextImage {...rest} src={src} />;
};

export default Image;
