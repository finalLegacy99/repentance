<template>
  <div class="home">
    
    <div id="ms-preload" class="ms-preload">
      <div id="status">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
    </div>

    <div class="ms-site-container">

      <!-- Edit Modal -->
      <div class="modal modal-dark" id="edit-modal" tabindex="-1" role="dialog" aria-labelledby="myEditModal">
        <div class="modal-dialog animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header d-block shadow-2dp no-pb">
              <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
  
              
            </div>
            <div class="modal-body">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab">
                  <form v-on:submit.prevent="edit()">
                    <fieldset>
                      <div class="form-group row justify-content-end is-empty">
                        <label for="textArea" class="col-lg-2 control-label"></label>
                        <div class="col-lg-12">
                          <textarea class="form-control" rows="3" id="textArea" v-model="input"></textarea>
                        </div>
                      </div>
                      <!-- <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user">Email</label>
                          <input type="text" id="ms-form-input" class="form-control" v-model="input">
                        </div>
                      </div> -->
                      
                      <div class="row mt-2">
                        {{errors[0]}}
            
                          <button type="submit" class="btn btn-raised btn-block btn-black pull-right">Save</button>
                        <!-- </div> -->
                      </div>
                    </fieldset>
                  </form>
                
                </div>
          
      
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ms-hero-page ms-hero-img-city ms-hero-bg-primary mb-4">
        <div class="container">
          <div class="text-center">
            <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">{{title}}</h1>
            <p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7 mb-4"><span class="color-warning"></span> </p>
            <h1></h1>
            <p></p>
            <!-- <a @click="setTextSelection(2)" href="javascript:void(0)" class="btn btn-raised btn-white color-primary"><i class="zmdi zmdi-desktop-mac"></i></a> -->
          </div>
        </div>
      </div>
      <div class="container container-full">
        <h1 class="text-center"><span class="badge badge-primary">{{header}}</span></h1>
        <section class="row timeline-center">
          
          <!-- Left Column -->
          <div class="col-md-6">

            <article class="card card-dark timeline-center-item left wow slideInRightTiny">
              <a @click="setTextSelection(2)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                
                
                  <h3 class="card-title">{{textLeft[0]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                
              
                <h3 class="card-title">{{textLeft[0]}}</h3>
              </header>
              <img src="/assets/img/fountain.png" alt="" class="img-fluid">
              
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              
              <img src="/assets/img/srgious.png" alt="" class="img-fluid">
              <a @click="setTextSelection(3)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <div class="card-body">
                  <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->
                  <p>{{textLeft[1]}}</p>
                </div>
              </a>
              <div v-else class="card-body">
                  <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->
                  <p>{{textLeft[1]}}</p>
                </div>
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              <a @click="setTextSelection(4)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textLeft[2]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textLeft[2]}}</h3>
                </header>
              <img src="/assets/img/entrance.png" alt="" class="img-fluid">
            
            </article>

          

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              <a @click="setTextSelection(5)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textLeft[3]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textLeft[3]}}</h3>
                </header>
              <img src="/assets/img/disguise.png" alt="" class="img-fluid">
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              
            
              <div class="card-body">
                <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->
                <a @click="setTextSelection(6)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[4]}} </p>
                </a>
                <p v-else>{{textLeft[4]}} </p>

                <a @click="setTextSelection(7)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[5]}}</p>
                </a>
                <p v-else>{{textLeft[5]}}</p>

                <a @click="setTextSelection(8)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[6]}}</p>
                </a>
                <p v-else>{{textLeft[6]}}</p>

                <a @click="setTextSelection(9)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[7]}}</p>
                </a>
                <p v-else>{{textLeft[7]}}</p>

                <a @click="setTextSelection(10)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[8]}}</p>
                </a>
                <p v-else>{{textLeft[8]}}</p>

                <a @click="setTextSelection(11)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[9]}}</p>
                </a>
                <p v-else>{{textLeft[9]}}</p>

                <a @click="setTextSelection(12)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[10]}}</p>
                </a>
                <p v-else>{{textLeft[10]}}</p>
                
                <a @click="setTextSelection(13)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[11]}}</p>
                </a>
                <p v-else>{{textLeft[11]}}</p>

                <a @click="setTextSelection(14)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[12]}}</p>
                </a>
                <p v-else>{{textLeft[12]}}</p>
              </div>
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              <a @click="setTextSelection(15)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textLeft[13]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textLeft[13]}}</h3>
                </header>
              <a @click="setTextSelection(16)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <div class="card-body">
                  <p>{{textLeft[14]}}</p>
                </div>
              </a>
              <div v-else class="card-body">
                  <p>{{textLeft[14]}}</p>
                </div>

              <img src="/assets/img/deochSpeaks.png" alt="" class="img-fluid">

              <div class="card-body">
                <a @click="setTextSelection(17)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">  
                  <p>{{textLeft[15]}}</p>
                </a>
                <p v-else>{{textLeft[15]}}</p>

                <a @click="setTextSelection(18)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[16]}}</p>
                </a>
                <p v-else>{{textLeft[16]}}</p>

                <a @click="setTextSelection(19)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                  
                  <p>{{textLeft[17]}}</p>
                </a>
                <p v-else>{{textLeft[17]}}</p>

                <a @click="setTextSelection(20)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                
                  <p>{{textLeft[18]}}</p>
                </a>
                <p v-else>{{textLeft[18]}}</p>

                <a @click="setTextSelection(21)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[19]}}</p>
                </a>
                <p v-else>{{textLeft[19]}}</p>

                <a @click="setTextSelection(22)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[20]}}</p>
                </a>
                <p v-else>{{textLeft[20]}}</p>
              </div>
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              <a @click="setTextSelection(23)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textLeft[21]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textLeft[21]}}</h3>
                </header>
            
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              
              <div class="card-body">
                <a @click="setTextSelection(24)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[22]}}</p>
                </a>
                <p v-else>{{textLeft[22]}}</p>

                <a @click="setTextSelection(25)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[23]}}</p>
                </a>
                <p v-else>{{textLeft[23]}}</p>

                <a @click="setTextSelection(26)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                  
                  <p>{{textLeft[24]}}</p>
                </a>
                <p v-else>{{textLeft[24]}}</p>
                
                <a @click="setTextSelection(27)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[25]}}</p>
                </a>
                <p v-else>{{textLeft[25]}}</p>

                <a @click="setTextSelection(28)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[26]}}</p>
                </a>
                <p v-else>{{textLeft[26]}}</p>

              </div>
            </article>

            <article class="card card-dark timeline-center-item left wow slideInLeftTiny">
              <a @click="setTextSelection(29)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textLeft[27]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textLeft[27]}}</h3>
                </header>
              
              <img src="/assets/img/weaponBurn.png" alt="" class="img-fluid">
              <div class="card-body">
                <a @click="setTextSelection(30)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">  
                  <p>{{textLeft[28]}}</p>
                </a>
                <p v-else>{{textLeft[28]}}</p>

                <a @click="setTextSelection(31)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textLeft[29]}}</p>
                </a>
                <p v-else>{{textLeft[29]}}</p>

                <a @click="setTextSelection(32)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                  
                  <p>{{textLeft[30]}}</p>
                </a>
                <p v-else>{{textLeft[30]}}</p>
              
              
              </div>
            </article>


          </div>
          

          <!-- Right Column -->
          <div class="col-md-6">

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              <a @click="setTextSelection(33)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <div class="card-body">
                  <p>{{textRight[0]}}</p>
                </div>
              </a>
              <div v-else class="card-body">
                  <p>{{textRight[0]}}</p>
                </div>
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              <a @click="setTextSelection(34)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textRight[1]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textRight[1]}}</h3>
                </header>

              <img src="/assets/img/empty.png" alt="" class="img-fluid">
              
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              <a @click="setTextSelection(35)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textRight[2]}}</h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textRight[2]}}</h3>
                </header>

              <img src="/assets/img/tower.png" alt="" class="img-fluid">

              <a @click="setTextSelection(36)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <div class="card-body">
                  <p>{{textRight[3]}}</p>
                </div>
              </a>
              <div v-else class="card-body">
                  <p>{{textRight[3]}}</p>
                </div>
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              <a @click="setTextSelection(37)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <div class="card-body">
                  <p>{{textRight[4]}}</p>
                </div>
              </a>
              <div v-else class="card-body">
                  <p>{{textRight[4]}}</p>
                </div>
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              
              <div class="card-body">
                <img src="/assets/img/shrine.png" alt="" class="img-fluid">
                <p></p>

                <a @click="setTextSelection(38)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>
                    {{textRight[5]}}
                  </p>
                </a>
                <p v-else>
                    {{textRight[5]}}
                  </p>

                <a @click="setTextSelection(39)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>
                    {{textRight[6]}}
                  </p>
                </a>
                <p v-else>
                    {{textRight[6]}}
                  </p>

              </div>
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              <a @click="setTextSelection(40)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textRight[7]}}
                  </h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textRight[7]}}
                  </h3>
                </header>

              <img src="/assets/img/reading.png" alt="" class="img-fluid">
              
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              <a @click="setTextSelection(41)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                <header class="card-header">
                  <h3 class="card-title">{{textRight[8]}}
                  </h3>
                </header>
              </a>
              <header v-else class="card-header">
                  <h3 class="card-title">{{textRight[8]}}
                  </h3>
                </header>

              <img src="/assets/img/sleep.png" alt="" class="img-fluid">
              
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              
            
              <div class="card-body">
                <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->

                <a @click="setTextSelection(42)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[9]}}</p>
                </a>
                <p v-else>{{textRight[9]}}</p>

                <a @click="setTextSelection(43)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[10]}}</p>
                </a>
                <p v-else>{{textRight[10]}}</p>

                <a @click="setTextSelection(44)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[11]}}</p>
                </a>
                <p v-else>{{textRight[11]}}</p>

                <a @click="setTextSelection(45)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                  
                  <p>{{textRight[12]}}</p>
                </a>
                <p v-else>{{textRight[12]}}</p>

                <a @click="setTextSelection(46)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                
                  <p>{{textRight[13]}}</p>
                </a>
                <p v-else>{{textRight[13]}}</p>

                <a @click="setTextSelection(47)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[14]}}</p>
                </a>
                <p v-else>{{textRight[14]}}</p>

                <a @click="setTextSelection(48)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[15]}}</p>
                </a>
                <p v-else>{{textRight[15]}}</p>

                <p></p>

                <p></p>

              </div>
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              
            
              <div class="card-body">
                <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->

                <a @click="setTextSelection(49)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[16]}}</p>
                </a>
                <p v-else>{{textRight[16]}}</p>

                <a @click="setTextSelection(50)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[17]}}</p>
                </a>
                <p v-else>{{textRight[17]}}</p>

                <a @click="setTextSelection(51)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[18]}}</p>
                </a>
                <p v-else>{{textRight[18]}}</p>

                <a @click="setTextSelection(52)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                  
                  <p>{{textRight[19]}}</p>
                </a>
                <p v-else>{{textRight[19]}}</p>

                <a @click="setTextSelection(53)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                
                  <p>{{textRight[20]}}</p>
                </a>
                <p v-else>{{textRight[20]}}</p>

                <a @click="setTextSelection(54)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[21]}}</p>
                </a>
                <p v-else>{{textRight[21]}}</p>

              

              </div>
            </article>

            <article class="card card-dark timeline-center-item right wow slideInLeftTiny">
              
            
              <div class="card-body">
                <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->

                <a @click="setTextSelection(55)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">  
                  <p>{{textRight[22]}}</p>
                </a>
                <p v-else>{{textRight[22]}}</p>

                <a @click="setTextSelection(56)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[23]}}</p>
                </a>
                <p v-else>{{textRight[23]}}</p>

                <a @click="setTextSelection(57)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
                  <p>{{textRight[24]}}</p>
                </a>
                <p v-else>{{textRight[24]}}</p>

                <a @click="setTextSelection(58)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">                  
                  <p>{{textRight[25]}}</p>
                </a>
                <p v-else>{{textRight[25]}}</p>
                            

              </div>
            </article>


          </div>
        </section>

        <a @click="setTextSelection(59)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
          <h1 class="text-center"><span class="badge badge-primary">{{textCenter[0]}}</span></h1>
        </a>
        <h1 v-else class="text-center"><span class="badge badge-primary">{{textCenter[0]}}</span></h1>

        <a @click="setTextSelection(60)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
          <h2 class="text-center"><span class="badge badge-danger">{{textCenter[1]}}</span></h2>
        </a>
        <h2 v-else class="text-center"><span class="badge badge-danger">{{textCenter[1]}}</span></h2>

        
        <article class="card card-dark timeline-center-item center wow slideInLeftTiny">
              
          <img src="/assets/img/wish.png" alt="" class="img-fluid">
          <div class="card-body">
            <!-- <h3 class="color-danger">Lorem ipsum dolor sit</h3> -->

            <a @click="setTextSelection(61)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
              <p>{{textCenter[2]}}</p>
            </a>
            <p v-else>{{textCenter[2]}}</p>

            <a @click="setTextSelection(62)" v-if="auth()" href="javascript:void(0)" class="no-focus animated zoomInDown" data-toggle="modal" data-target="#edit-modal">
              <p>
              {{textCenter[3]}}
              </p>
            </a>
            <p v-else>
              {{textCenter[3]}}
              </p>
            
          </div>
        </article>
      
      </div> <!-- container -->


      <aside class="ms-footbar">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 ms-footer-col">
              <div class="ms-footbar-block">
                
              </div>
              <div class="ms-footbar-block">
                
              </div>
            </div>
            <div class="col-lg-5 col-md-7 ms-footer-col ms-footer-alt-color">
              <div class="ms-footbar-block">
                
              </div>
            </div>
            <div class="col-lg-3 col-md-5 ms-footer-col ms-footer-text-right">
              <div class="ms-footbar-block">
                
              </div>
              <div class="ms-footbar-block">
                
              </div>
            </div>
          </div>
        </div>
      </aside>
      <footer class="ms-footer">
        <div class="container">
          
        </div>
      </footer>
      <div class="btn-back-top">
        <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
      </div>
  
    
    </div>
    
        
  </div>

     
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      texts:[],
      textLeft: [],
      textRight: [],
      textCenter: [],
      title: "",
      header: "",
      email: "",
      password: "",
      errors: [],
      input: "",
      textIndex: 0,
      textArea: ""
    };
  },
  created: function() {
    axios({
      url: "/api/texts",
      method: 'get',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      this.texts = response.data;
      // console.log(this.texts);

      for (let text of this.texts){
        if (text.area === "title"){
          this.title = text.input;
        } else if (text.area === "header"){
          this.header = text.input;
        } else if (text.area === "left"){
          this.textLeft.push(text.input);
        } else if (text.area === "right"){
          this.textRight.push(text.input);
        } else if (text.area === "center"){
          this.textCenter.push(text.input);
        }
      }

      // console.log("text left", this.textLeft);
      // console.log("text right", this.textRight);
      // console.log("text center", this.textCenter);
      // console.log("title text", this.title);
      // console.log("header text", this.header);

    }).catch(error => {
        if (error.response){
          console.log("status", error.response.request.status);
          if (error.response.data.errors || error.response.data.messages){
            console.log("Errors", error.response.data.errors);
            console.log("Messages", error.response.data.messages);
          }
        }
    })

  },
  methods: {
    setTextSelection: function(index){
      this.textIndex = index + 1;
      // console.log("setting text index", this.textIndex);
      // console.log("setting selected text", this.texts[this.textIndex]);
      this.input = this.texts[index].input;
    },
    edit: function(){

      console.log("text selection for update", this.input);
      console.log("index for update", this.textIndex);
      
      var params = {
        input: this.input
      }

      axios.patch("/api/texts/" + this.textIndex, params,

        { 
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
          }, 
          
        }
      ).then(response => {
        $('#edit-modal').modal('hide');
        console.log(response.data);
        window.location.reload();
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    },
    auth: function(){
      return true;
      // if (localStorage.getItem("jwt")){
        
      //   return true;
      // } else {
      //   return false;
      // }
    }
  }
};
</script>
