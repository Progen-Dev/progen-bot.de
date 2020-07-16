<template>
    <div class="discord">
        <div class="container text-center">
            <h1>Progen Discord</h1>
            <p class="my-5">
                Progen's Discord Server. There they can write with other members to be informed about all current topics and look at the latest development work.
                    <br><br>
                <a href="https://discordapp.com/oauth2/authorize?client_id=495293590503817237&scope=bot&permissions=8" class="button-btn"><img class="image" src="../assets/svg/Discord-Logo-White.svg" height="40px" width="40px"/>Invite Progen</a>
                <br><br>
                <a href="https://discordapp.com/oauth2/authorize?client_id=662647209929605126&scope=bot&permissions=3145728" class="button-btn"><img class="image" src="../assets/svg/Discord-Logo-White.svg" height="40px" width="40px"/>Invite ProgenMusic1</a>
                <br><br>
                <a href="https://discordapp.com/oauth2/authorize?client_id=662647378385305620&scope=bot&permissions=3145728" class="button-btn"><img class="image" src="../assets/svg/Discord-Logo-White.svg" height="40px" width="40px"/>Invite ProgenMusic2</a>
            </p>
            <DiscordInfo guildid="495865304770150401"
            href="https://discord.gg/rPeBPkr"
            class="mx-auto dc-info mb-5"
            />
            <iframe
            class="mx-auto dc-frame"
            src="https://discordapp.com/widget?id=495865304770150401&theme=dark"
            allowtransparency="true"
            frameborder="0"
            ></iframe>
                            <img src="https://top.gg/api/widget/495293590503817237.svg?usernamecolor=FFFFFF&topcolor=000000" alt="Can't Load">
        </div>
    </div>
</template>
<script>
import { RouterEventBus } from '../js/router-eventbus';
import DiscordInfo from '../components/DiscordInfo';
export default {
    name: 'Discord',

    components:{
        DiscordInfo
    },
    props:{

    },

    data(){
        return{

        };
    },

    mounted(){
        RouterEventBus.$emit('mounted', this.$options.name);
    }
}
</script>
<style scoped>
    .discord{
        margin-top: 120px;
        margin-left: auto;
        margin-right: auto;
        width: 50vw;
    }

    .dc-frame{
        height: 700px;
        width: 100%;
    }

    .button-btn{
        background-color: #7289DA;
        border-radius: 15px;
        color: black;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .image{
        background-color: #7289DA;
    }

</style>