import React from 'react';
import { IconLinkCards, osProjectIcons } from '@infinum/docusaurus-theme';

export const EsOpenSource = (props) => {
	return (
		<IconLinkCards
			{...props}
			title='Start exploring'
			osProjectIcons
			cards={[
				{
					icon: osProjectIcons.boilerplate,
					text: 'eightshift Boilerplate',
					url: 'https://github.com/infinum/eightshift-boilerplate'
				},
				{
					icon: osProjectIcons.boilerplate,
					text: 'eightshift Boilerplate Plugin',
					url: 'https://github.com/infinum/eightshift-boilerplate-plugin'
				},
				{
					icon: osProjectIcons.eightshiftLibs1,
					text: 'eightshift Libs',
					url: 'https://github.com/infinum/eightshift-libs'
				},
				{
					icon: osProjectIcons.eightshiftFrontendLibs,
					text: 'eightshift Frontend Libs',
					url: 'https://github.com/infinum/eightshift-frontend-libs'
				},
				{
					icon: osProjectIcons.eightshiftForms,
					text: 'eightshift Forms',
					url: 'https://github.com/infinum/eightshift-forms'
				},
				{
					icon: osProjectIcons.eightshiftDocs,
					text: 'eightshift Docs',
					url: 'https://github.com/infinum/eightshift-docs'
				},
				{
					icon: osProjectIcons.storybook,
					text: 'eightshift Storybook (legacy)',
					url: 'https://github.com/infinum/eightshift-storybook'
				},
				{
					icon: osProjectIcons.eightshiftCodingStandard,
					text: 'eightshift Coding Standards for WordPress',
					url: 'https://github.com/infinum/eightshift-coding-standards'
				},
			]}
		/>
	);
};
