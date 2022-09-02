<?php
/**
 * File containing the Comments_Based_Grade class.
 *
 * phpcs:disable Squiz.Commenting.FunctionComment.InvalidNoReturn
 *
 * @package sensei
 */

namespace Sensei\Quiz_Submission\Grade\Models;

use DateTimeInterface;
use RuntimeException;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Comments_Based_Grade.
 *
 * @since $$next-version$$
 */
class Comments_Based_Grade implements Grade_Interface {
	/**
	 * The question ID.
	 *
	 * @var int
	 */
	private $question_id;

	/**
	 * The grade points.
	 *
	 * @var int
	 */
	private $points;

	/**
	 * The grade feedback.
	 *
	 * @var string|null
	 */
	private $feedback;

	/**
	 * Constructor.
	 *
	 * @param int         $question_id The question ID.
	 * @param int         $points      The grade points.
	 * @param string|null $feedback    The grade feedback.
	 */
	public function __construct(
		int $question_id,
		int $points,
		string $feedback = null
	) {
		$this->question_id = $question_id;
		$this->points      = $points;
		$this->feedback    = $feedback;
	}

	/**
	 * Get the grade ID.
	 *
	 * @return int
	 * @throws RuntimeException When called.
	 */
	public function get_id(): int {
		throw new RuntimeException( 'This legacy model has no `id`' );
	}

	/**
	 * Get the answer ID.
	 *
	 * @return int
	 * @throws RuntimeException When called.
	 */
	public function get_answer_id(): int {
		throw new RuntimeException( 'This legacy model has no `answer_id`' );
	}

	/**
	 * Get the question ID.
	 *
	 * @return int
	 */
	public function get_question_id(): int {
		return $this->question_id;
	}

	/**
	 * Get the grade points.
	 *
	 * @return int
	 */
	public function get_points(): int {
		return $this->points;
	}

	/**
	 * Get the grade feedback.
	 *
	 * @return string|null
	 */
	public function get_feedback(): ?string {
		return $this->feedback;
	}

	/**
	 * Set the grade feedback.
	 *
	 * @param string $feedback The feedback string.
	 */
	public function set_feedback( string $feedback ): void {
		$this->feedback = $feedback;
	}

	/**
	 * Get the created date.
	 *
	 * @return DateTimeInterface
	 * @throws RuntimeException When called.
	 */
	public function get_created_at(): DateTimeInterface {
		throw new RuntimeException( 'This legacy model has no `created_at`' );
	}

	/**
	 * Get the updated date.
	 *
	 * @return DateTimeInterface
	 * @throws RuntimeException When called.
	 */
	public function get_updated_at(): DateTimeInterface {
		throw new RuntimeException( 'This legacy model has no `updated_at`' );
	}
}
