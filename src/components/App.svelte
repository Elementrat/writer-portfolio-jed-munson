<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Publications from "./Publications.svelte";
    import Bio from "./Bio.svelte"
</script>

<div class = "app">
    <Header />
    <div class = "primary">
        <Publications/>
    </div>
    <div class = "secondary">
        <Bio/>
    </div>
    <Footer />
</div>