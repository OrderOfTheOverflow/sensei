<?php
/**
 * File containing the Sensei_Home_Task_Setup_Site class.
 *
 * @package sensei-lms
 * @since $$next-version$$
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Sensei_Home_Task_Setup_Site class.
 *
 * @since $$next-version$$
 */
class Sensei_Home_Task_Setup_Site implements Sensei_Home_Task {

	/**
	 * The ID for the task.
	 *
	 * @return string
	 */
	public static function get_id(): string {
		return 'setup-site';
	}

	/**
	 * Number used to sort in frontend.
	 *
	 * @return int
	 */
	public function get_priority(): int {
		return 100;
	}

	/**
	 * Task title.
	 *
	 * @return string
	 */
	public function get_title(): string {
		return __( 'Set up Course Site', 'sensei-lms' );
	}

	/**
	 * Task url.
	 *
	 * @return string
	 */
	public function get_url(): ?string {
		return admin_url( 'admin.php?page=sensei_setup_wizard' );
	}

	/**
	 * Whether the task is completed or not.
	 *
	 * @return bool
	 */
	public function is_completed(): bool {
		return true;
	}
}
