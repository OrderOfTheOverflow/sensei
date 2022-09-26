<?php
/**
 * This file contains the Sensei_Home_Help_Provider_Test class.
 *
 * @package sensei
 */


/**
 * Tests for Sensei_Home_Help_Provider class.
 *
 * @covers Sensei_Home_Help_Provider
 */
class Sensei_Home_Help_Provider_Test extends WP_UnitTestCase {

	/**
	 * The class under test.
	 *
	 * @var Sensei_Home_Help_Provider
	 */
	private $provider;

	/**
	 * Setup.
	 */
	public function setUp() {
		parent::setUp();
		$this->provider = new Sensei_Home_Help_Provider();
	}

	/**
	 * Assert that all elements returned by the provider are a correct Sensei_Home_Quick_Links_Category.
	 */
	public function testAllOutputAreCorrectQuickLinksCategories() {
		$categories = $this->provider->get();

		foreach ( $categories as $category ) {
			$this->assertInstanceOf( Sensei_Home_Help_Category::class, $category );
			$this->assertIsString( $category->get_title() );
			$this->assertIsArray( $category->get_items() );
			foreach ( $category->get_items() as $item ) {
				$this->assertIsString( $item->get_title() );
			}
		}
	}
}
