<div id="footer">
    <div id="footer-wrapper" class="flexbox">
        <div class="left" id="emailbox">
            <div id="email-wrapper">
                <h2>Contact</h2>
                <div id="top" class="flexbox">
                    <div id="email" class="row">
                        <p class="label">Email</p>
                        <input type="text" name="email" id="emailinput">
                    </div>
                    <div id="title" class="row">
                        <p class="label">Title</p>
                        <input type="text" name="title" id="titleinput">
                    </div>
                </div>
                <div id="bottom">
                    <div id="message" class="row">
                        <p class="label">Message</p>
                        <textarea name="content" id="messageinput" class="resize-ta"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="right" id="contactbox">
            <h2>Socials</h2>
            <div id="list">
                <a class="contact" id="instagram" href="https://www.instagram.com/leonardo.salanii/"><i class="fa-brands fa-instagram"></i> Instagram</a>
                <!-- <a class="contact" id="email"     href="mailto:leonardo07.salani@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a> -->
                <a class="contact" id="telegram"  href="https://t.me/sudatoLeo"><i class="fa-brands fa-telegram"></i> Telegram</a>
                <a class="contact" id="linkedin"  href="https://www.linkedin.com/in/leonardo-salani/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    </div>
</div>

<style>
        input[type="text"], textarea {
        background-color: var(--element-background);
        border: none;
        border-radius: 6px;
        box-shadow: var(--box-shadow);
        padding: 0.75rem;
    }
    input[type="text"]:focus, textarea {
        outline: none;
    }
    #contactbox {
        flex-grow: 2;
    }
    #contactbox > #list {
        margin-top: 2rem;
        flex-direction: column;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .contact {
        text-decoration: none;
    }
    #emailbox {
        flex-grow: 2;
        display: flex;
        justify-content: center;
    }
    #email-wrapper {
        flex-grow: 1;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    #email-wrapper > #top {
        gap: 2rem;
        flex-grow: 1;
    }
    .label {
        width: 100px;
    }
    .row {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    #messageinput {
        resize: vertical !important;
    }
</style>