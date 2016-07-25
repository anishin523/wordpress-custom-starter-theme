<?php
/**
 * Template for displaying the footer
 *
 * Contains the closing of the id=main div and all content
 * after. Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage Rustic_Modern
 * @since Rustic Modern 1.0
 */
?>

	</main><!-- #main -->

	<footer id="site-footer" role="contentinfo">

		
		<div class="other_elements">
			<input type="hidden" value="<?php bloginfo('template_directory');?>" id="theme_url"/>
			<input type="hidden" value="<?=home_url();?>" id="site_url"/>
		</div>
	</footer><!-- #footer -->

</div><!-- #wrapper -->

<?php
	/*
	 * Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */

	wp_footer();
?>


</body>
</html>
