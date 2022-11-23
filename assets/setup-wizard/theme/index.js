/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useQueryStringRouter } from '../../shared/query-string-router';
import { H } from '../../shared/components/section';
import mainImage from '../../images/onboarding-theme-main.webp';
import mobileImage1 from '../../images/onboarding-theme-mobile-1.webp';
import mobileImage2 from '../../images/onboarding-theme-mobile-2.webp';
import mobileImage3 from '../../images/onboarding-theme-mobile-3.webp';
import mobileImage4 from '../../images/onboarding-theme-mobile-4.webp';
import mobileImage5 from '../../images/onboarding-theme-mobile-5.webp';
import quoteAuthorImage from '../../images/onboarding-theme-quote-author.webp';
import learningModeImage1 from '../../images/onboarding-theme-learning-mode-1.webp';
import learningModeImage2 from '../../images/onboarding-theme-learning-mode-2.webp';
import learningModeImage3 from '../../images/onboarding-theme-learning-mode-3.webp';

/**
 * Theme step for Setup Wizard.
 */
const Theme = () => {
	const { goTo } = useQueryStringRouter();

	const goToNextStep = () => {
		goTo( 'tracking' );
	};

	return (
		<>
			<div className="sensei-setup-wizard__content sensei-setup-wizard__content--large">
				<div className="sensei-setup-wizard__title">
					<H className="sensei-setup-wizard__step-title">
						{ __( 'Get new Sensei theme', 'sensei-lms' ) }
					</H>
					<p>
						{ __(
							"The new Sensei theme it's build from ground up with Learning Mode in mind to optimize your full site so that everything works smootly together.",
							'sensei-lms'
						) }
					</p>
				</div>

				<div className="sensei-setup-wizard__actions sensei-setup-wizard__actions--full-width">
					<div className="sensei-setup-wizard__theme-actions">
						<button
							className="sensei-setup-wizard__button sensei-setup-wizard__button--primary"
							onClick={ goToNextStep }
						>
							{ __(
								'Install the new Sensei theme',
								'sensei-lms'
							) }
						</button>

						<button
							className="sensei-setup-wizard__button sensei-setup-wizard__button--secondary sensei-setup-wizard__button--only-medium"
							onClick={ goToNextStep }
						>
							{ __( 'Explore the theme', 'sensei-lms' ) }
						</button>
					</div>

					<div className="sensei-setup-wizard__action-skip">
						<button
							className="sensei-setup-wizard__button sensei-setup-wizard__button--link"
							onClick={ goToNextStep }
						>
							{ __( 'Skip theme selection', 'sensei-lms' ) }
						</button>
					</div>
				</div>
			</div>

			<div className="sensei-setup-wizard-theme">
				<div className="sensei-setup-wizard-theme__image-wrapper">
					<img
						src={ window.sensei.pluginUrl + mainImage }
						alt={ __( 'Sensei theme illustration', 'sensei-lms' ) }
						className="sensei-setup-wizard-theme__image"
					/>
				</div>
			</div>

			<H className="sensei-setup-wizard__step-title">
				{ __(
					'Mobile optimized so it looks great on any screen size',
					'sensei-lms'
				) }
			</H>

			<ul>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + mobileImage1 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + mobileImage2 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + mobileImage3 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + mobileImage4 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + mobileImage5 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
			</ul>

			<figure>
				<img
					src={ window.sensei.pluginUrl + quoteAuthorImage }
					alt={ __( 'Sensei theme illustration', 'sensei-lms' ) }
					className="sensei-setup-wizard-theme__image"
				/>
				<blockquote>
					<p>
						{ __(
							'I always wanted to write, and thanks to Cours, I got it right. My writing is clearer, and I can finally get my message across.',
							'sensei-lms'
						) }
					</p>
				</blockquote>
				<figcaption>
					<strong>Cristopher Brown</strong>
					{ __( 'Founder at BeautifulWriting.com', 'sensei-lms' ) }
				</figcaption>
			</figure>

			<H className="sensei-setup-wizard__step-title">
				{ __(
					'All new and improved Learning Mode to help keep your students focused',
					'sensei-lms'
				) }
			</H>

			<ul>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + learningModeImage1 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + learningModeImage2 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
				<li>
					<div className="sensei-setup-wizard-theme__image-wrapper">
						<img
							src={ window.sensei.pluginUrl + learningModeImage3 }
							alt={ __(
								'Sensei theme illustration',
								'sensei-lms'
							) }
							className="sensei-setup-wizard-theme__image"
						/>
					</div>
				</li>
			</ul>
		</>
	);
};

export default Theme;
