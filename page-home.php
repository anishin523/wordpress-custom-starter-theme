<?php
/**
 * Template Name: Home
 */
?>

<?php get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

<div id="home_page" class="page_wrapper">

</div>

<?php endwhile; ?>		

<?php get_footer(); ?>