import React from 'react'
import classes from './AlbumPage.module.css'


export default function AlbumPage() {
  return (
    <>
    {/*<!----------------- album image and tile ------------------>*/}
    <section id="album-page-hero">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md-4">
                    <img
                        id="hero-img"
                        src="https://i.pinimg.com/1200x/21/b1/c7/21b1c7f4af7c339fff746041a0e2403f.jpg"
                        class="img-fluid"
                        alt="Hybrid theory album cover"
                    />
                </div>
                <div class="col-12 col-md-8">
                    <div
                        class="d-flex flex-column justify-content-end h-100"
                    >
                        <small>ALBUM</small>
                        <h1>Bohemain Rhapsody(Original Soundtrack)</h1>
                        <div>
                            <p>
                                <small
                                    ><strong>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/pt/9/9f/Bohemian_Rhapsody.png"
                                            height="22px"
                                            alt=""
                                            style="border-radius: 2rem"
                                            alt="Original Album Cover"
                                        />
                                        Queen . </strong
                                    >2018<strong> . </strong>22 songs<strong>
                                        ,
                                    </strong>
                                    1hr 19 min
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*<!----------------- play heart ... ---------------------------->*/}

    <section id="play-heart-dots">
        <div class="container">
            <div class="row">
                <div class="col-1 mt-4 ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        class="bi bi-play-circle-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                        />
                    </svg>
                </div>
                <div id="page-heart-icon" class="col-1 mt-4 ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        onclick="likedSong()"
                    >
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        />
                    </svg>
                </div>
                <div id="page-dots-icon" class="col-1 mt-4 ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-three-dots"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </section>
    {/*<!------- title and clock--------------->*/}
    <section id="track-list-icons">
        <div class="container">
            <div class="row ml-3">
                <div class="col-11 justify-content-start">
                    <span class="ml-2" class="title-song"
                        ><span class="hashtag-title">#</span> TITLE</span
                    >
                </div>
                <div
                    id="time-icon"
                    class="col-1 album-col justify-content-end"
                >
                    <span class="clock-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-clock mr-5 ml-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                            />
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <hr class="hr-page" />
        </div>
    </section>

    <section id="album-track-list">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="ml-3 pb-4">
                        <span class="track-num">1.</span>
                        <span class="ml-4"
                            ><strong>20th century fox Fanfare</strong
                            ><br /><span class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">2.</span>
                        <span class="ml-4"
                            ><strong>Somebody To Love</strong><br /><span
                                class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">3.</span>
                        <span class="ml-4"
                            ><strong>Doing All Right- ...Revisited</strong
                            ><br /><span class="singer-name"
                                >Smile</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">4.</span>
                        <span class="ml-4"
                            ><strong
                                >Keep Yourself Alive - Live At The
                                Rainbow</strong
                            ><br /><span class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">5.</span>
                        <span class="ml-4"
                            ><strong>Killer Queen</strong><br /><span
                                class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">6.</span>
                        <span class="ml-4"
                            ><strong
                                >Fat Bottomed Girls - Live In Paris</strong
                            ><br /><span class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">7.</span>
                        <span class="ml-4"
                            ><strong>Bohemain Rhaposdy</strong><br /><span
                                class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">8.</span>
                        <span class="ml-4"
                            ><strong
                                >Now I'm Here - Live At The Hammersmith
                                Odeon</strong
                            ><br /><span class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">9.</span>
                        <span class="ml-4"
                            ><strong>Creazy Little Thing Called Love</strong
                            ><br /><span class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                    <div class="ml-3 pb-4">
                        <span class="track-num">10.</span>
                        <span class="ml-4"
                            ><strong>Midnigth protocol</strong><br /><span
                                class="singer-name"
                                >Queen</span
                            ></span
                        >
                    </div>
                </div>
                <div id="blank-space" class="col-6"></div>
                <div id="track-times" class="col-1">
                    <div class="ml-3 pb-5">2:56</div>
                    <div class="ml-3 pb-5">4:56</div>
                    <div class="ml-3 pb-5">3:16</div>
                    <div class="ml-3 pb-5">3:56</div>
                    <div class="ml-3 pb-5">2:59</div>
                    <div class="ml-3 pb-5">4:37</div>
                    <div class="ml-3 pb-5">5:56</div>
                    <div class="ml-3 pb-5">4:25</div>
                    <div class="ml-3 pb-5">4:25</div>
                    <div class="mb-4 ml-3 pb-5">2:43</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
