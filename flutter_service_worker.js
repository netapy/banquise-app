'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".well-known/assetlinks.json": "9efc08e4277577aa93b37c673e7f60e8",
"assets/AssetManifest.bin": "8220c4dfe7328420d5531daebf14da16",
"assets/AssetManifest.bin.json": "375be22540d35b2862cd2f12e5acf170",
"assets/AssetManifest.json": "abbff07694c799b272ecf5d0c68b7dc9",
"assets/assets/animations/banquiseloadtest1z.riv": "8a6102be7c78d5832f002792542ee03b",
"assets/assets/animations/bubbles3.riv": "0a82c94864bcd2fab33822eb422bd1f4",
"assets/assets/animations/explosion4.riv": "2f7c11baaa8dc47b0b5fa2a904a85b9b",
"assets/assets/animations/fire4.riv": "ad311b5d406d1f68398a3ce7b54af399",
"assets/assets/animations/gameoverscreen4.riv": "298ea302d81361519f47e9b77a639fe7",
"assets/assets/animations/home_scroll_horizontal.json": "8fc68b4d95443cde7ed2b19aad914c8a",
"assets/assets/animations/home_scroll_vertical.json": "a73cc2965fba033eb851ce2e808fd64e",
"assets/assets/animations/liquidload.riv": "bdefa550c69a77cf222cb666d0b44e1b",
"assets/assets/animations/loading_animation.json": "f85944baf8ea4ebc888fa8b4cc600d08",
"assets/assets/animations/new_file.riv": "1eb6b2a44e45e9bee6c249daa2c83c60",
"assets/assets/animations/simplecutload.riv": "41da914a4d62b6901c07fffaf4aa7905",
"assets/assets/animations/stars_4.riv": "e7b8012df996791081bb2b0736fd3b0b",
"assets/assets/data/playerdt.json": "243b4a2be5cd920b86535c6883e16e74",
"assets/assets/fonts/BanquiseIcons.ttf": "a1ae4a27ea6f2e16a18e179f74e7cf1e",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/SeymourOne-Regular.ttf": "174b8f577840cf3e60c020bc0a084bbd",
"assets/assets/images/banquise_logoWht.png": "9e48a3c07eef560bbce06511dd425271",
"assets/assets/images/black_back.png": "841452a9d76342357a406fc04b2e8fbf",
"assets/assets/images/bqz-logo-full.png": "24123ec9d7759b0faee2d0f23cbcc3ec",
"assets/assets/images/crea_bgMove.png.jpg": "d745d682fa67b1ed300aa1af2569547b",
"assets/assets/images/helper/0.png": "721998566d7f2e0e217782d2cc2a70bf",
"assets/assets/images/helper/1.png": "f1dc124584c5166a37c0359a69a1c623",
"assets/assets/images/helper/10.png": "18f1a1ecb679f0e2029633e937a5dbfd",
"assets/assets/images/helper/11.png": "79fb7903a83eecc3a6b61306b332f37f",
"assets/assets/images/helper/12.png": "b8d0270b662bf925c7d37f9c6962445a",
"assets/assets/images/helper/13.png": "85f42f9d522ed14a3e3a8a910ca1ecc7",
"assets/assets/images/helper/14.png": "cebdd04dff67e38b08be65cbe6a3b6d1",
"assets/assets/images/helper/15.png": "7cad0916afe63541bb82ccbe33e5d8a6",
"assets/assets/images/helper/16.png": "60fdec5a34b546e2df800c1efd4b1410",
"assets/assets/images/helper/17.png": "6a12616ae1000b95f9736123d8586c27",
"assets/assets/images/helper/18.png": "d6d9aa8cfb91636a4f3136baae6e2ff2",
"assets/assets/images/helper/19.png": "5a57f6cb73cd8facc32ddd205f5daefd",
"assets/assets/images/helper/2.png": "fc3b114c7de295b24f13f3bbb05357e5",
"assets/assets/images/helper/20.png": "30f406e7671d6caafafa5e659fcb2df8",
"assets/assets/images/helper/21.png": "458203bd0335daf2b38f80e90a0b056c",
"assets/assets/images/helper/22.png": "8d1c01702d5020bd9471c93a3e5fe027",
"assets/assets/images/helper/23.png": "267ca7925867bf7ddc2ad3cc506c7207",
"assets/assets/images/helper/24.png": "108f99e9ef2d51e0d7bbc5971309dc72",
"assets/assets/images/helper/25.png": "3234f2046406d573e5d68e47960bae8b",
"assets/assets/images/helper/26.png": "79f6b0af0ff43d5d1915177008da7795",
"assets/assets/images/helper/27.png": "2dafa021bcaa8b11dcf5c5fa4fd5bf91",
"assets/assets/images/helper/28.png": "bf8b8b2e416b46c8221667d4dbc8f75e",
"assets/assets/images/helper/29.png": "403d40f0e6092c6b5d1fae5bfccbf5d7",
"assets/assets/images/helper/3.png": "8b59e59b9545cde51e3e7d82789d12f7",
"assets/assets/images/helper/4.png": "d512219f01d566ab9b5a776a5a2dc8f6",
"assets/assets/images/helper/5.png": "cdb2655169c1df467f29317cc787a5ff",
"assets/assets/images/helper/6.png": "721998566d7f2e0e217782d2cc2a70bf",
"assets/assets/images/helper/7.png": "112380c04a752a84c52bafa27419043d",
"assets/assets/images/helper/8.png": "cf28bff13af356e16428d3aa78952ae4",
"assets/assets/images/helper/9.png": "ef0d130e0ac3374d8a0123febce26825",
"assets/assets/images/logo_white_mask_transp.png": "5744aa35c1da8605e8ee1c2269d30c09",
"assets/assets/images/screw.png": "b14d29df49ab550ce81bba61192b1f34",
"assets/assets/images/screw_hole.png": "325fe873dd1c95f3d081d066b1a75f7e",
"assets/assets/images/textures/grid.jpeg": "34994f912a61d047722e263f8fbf8afd",
"assets/assets/images/textures/wood1.jpeg": "8ab01c41e9665cb9d86e314990dd3278",
"assets/assets/images/tuto/banquisetrigger1v2.png": "ac1606bbc599ebb9cff32759c7ccce91",
"assets/assets/images/tuto/banquisetrigger2v1.png": "1536822a99697ce75241aa66709e5d28",
"assets/assets/images/tuto/main_creating_help_basics_objects_cara.png": "c0396a40d2c73a57342ad859062328ba",
"assets/assets/images/tuto/main_creating_help_basics_objects_hitbox.png": "a20c25e840975645283b9c1f633d5518",
"assets/assets/images/tuto/main_creating_help_basics_objects_hitbox2.png": "acbf7db08e514f21129a9cac444b57fb",
"assets/assets/images/tuto/main_creating_help_basics_objects_how.png": "44a2116e2cd92e341eea9562095de8c9",
"assets/assets/images/tuto/main_creating_help_basics_objects_how2.png": "bf1e9d1e37ba3ef801e431ef1066d336",
"assets/assets/images/tuto/main_creating_help_basics_objects_logic.png": "5ee0e1a4a9b38c32585579963b60b605",
"assets/assets/images/tuto/main_creating_help_basics_objects_logic2.png": "2649fa5f814e6f6f34c2b7e55b7c8c43",
"assets/assets/images/tuto/main_creating_help_basics_objects_what.png": "23780d12be8b41ee607ba60fb1b10c95",
"assets/assets/images/tuto/main_creating_help_basics_objects_what2.png": "c4556bdf265305aa0e348751a6811522",
"assets/assets/images/tuto/main_creating_help_basics_toys_how.png": "b9fe65825f86e8541563a975b8d83286",
"assets/assets/images/tuto/main_creating_help_basics_toys_how2.png": "9154843e4ab9bf0ab02629eca49c3b34",
"assets/assets/images/tuto/main_creating_help_basics_toys_mod.png": "ba9c3ff2132c0cbd5b8b43cd5fb3ea91",
"assets/assets/images/tuto/main_creating_help_basics_toys_mod2.png": "e7fefd877443d1a52348232d7dcffb85",
"assets/assets/images/tuto/main_creating_help_basics_toys_what.png": "9ceffe89fc9706cc3c54072601902801",
"assets/assets/images/tuto/main_creating_help_basics_toys_what2.png": "f12196cfe546c5e7136ab384f445701d",
"assets/assets/images/tuto/main_creating_help_basics_toys_what3.png": "41c53e93ea1c4f435d9fe5d2b39fdf27",
"assets/assets/images/tuto/main_creating_help_basics_visuals_bg.png": "764d2a38544a9cacf8db793fc3a6df42",
"assets/assets/images/tuto/main_creating_help_basics_visuals_bg2.png": "a21405322f9d2d4d7bfe2161620eefdd",
"assets/assets/images/tuto/main_creating_help_basics_visuals_import.png": "9edb6080832e020b5fea62e5c2b1cd71",
"assets/assets/images/tuto/main_creating_help_basics_visuals_import2.png": "66a6641a013201207c61f6cc4baa5c89",
"assets/assets/images/tuto/main_creating_help_basics_visuals_order.png": "b2e3ea7a02472a3d95f2858a8cd41827",
"assets/assets/images/tuto/main_creating_help_basics_visuals_order2.png": "e3aa903169e23d81bc9039e509355e58",
"assets/assets/images/tuto/main_creating_help_logic_act_design_music.png": "c1b4576a4dbe9b3ebe86fad10b9eed77",
"assets/assets/images/tuto/main_creating_help_logic_act_design_particles.png": "37e927c260ea5c361af3aa346f355ea2",
"assets/assets/images/tuto/main_creating_help_logic_act_design_particles2.png": "ebd60e5baf901161dc2536fa9c66f591",
"assets/assets/images/tuto/main_creating_help_logic_act_design_sshake.png": "bad8d492b54d803330819534309be224",
"assets/assets/images/tuto/main_creating_help_logic_act_design_text.png": "55770febaa4368ff61b8d345b60f5476",
"assets/assets/images/tuto/main_creating_help_logic_act_design_vfx.png": "de594caaec4831d96b418f3de8098de5",
"assets/assets/images/tuto/main_creating_help_logic_act_design_visual.png": "e23f45cf131631e3611afab3829870e9",
"assets/assets/images/tuto/main_creating_help_logic_act_info_data.png": "5445dc8932192a91d0adfb35e3c2d118",
"assets/assets/images/tuto/main_creating_help_logic_act_info_data2.png": "05deacf1c8d7259f8a484365cd4d1227",
"assets/assets/images/tuto/main_creating_help_logic_act_info_gspeed.png": "052800726f1365060202a17f79ee4eef",
"assets/assets/images/tuto/main_creating_help_logic_act_info_gspeed2.png": "8ca03138e74925af6f671b37ed262d98",
"assets/assets/images/tuto/main_creating_help_logic_act_info_timer.png": "9dfa6e4a14331ccde8231bae8e47204e",
"assets/assets/images/tuto/main_creating_help_logic_act_info_timer2.png": "2c0b7c7a9347626c831746bc7ca1205f",
"assets/assets/images/tuto/main_creating_help_logic_act_info_timer3.png": "9845dc87989b00a59e51874efa0dc7b1",
"assets/assets/images/tuto/main_creating_help_logic_act_info_win.png": "2fd2ebaa17efcc5b8340bc8b3c2b4882",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_collider.png": "5f20259884408c56d04dd4caa8bff0a9",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_force.png": "3b6ea3cc4faa3b8f2a17525281305bcf",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_force2.png": "5d41109ce78c21ac75ff030fa63c5041",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_gravity.png": "ff9b7a21d3900b94d704a5379aaebff1",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_state.png": "14b0629f8ffa81322a0007e08c813d5b",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_state2.png": "1f0081f8805c1b4af3bca185079470c8",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_state3.png": "abad8f517b5fd5c8493f7d207562ebb3",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_what.png": "79961d9378a26ae40deeb8f433623e7e",
"assets/assets/images/tuto/main_creating_help_logic_act_physics_what2.png": "28fc5637427af9c824297515fcb1f113",
"assets/assets/images/tuto/main_creating_help_logic_act_position_attach.png": "aba29f187a10c069a3888204282d9f32",
"assets/assets/images/tuto/main_creating_help_logic_act_position_move.png": "841476b6fc7b2bae0123e336ae5ee059",
"assets/assets/images/tuto/main_creating_help_logic_act_position_move2.png": "fd717549c77079bf4ba3109e11110ba3",
"assets/assets/images/tuto/main_creating_help_logic_act_position_rot.png": "e76fa3f205d1f715cf4e9950c2d53c1a",
"assets/assets/images/tuto/main_creating_help_logic_act_what.png": "ec52939c616f0a866d0eb1b5dde785c1",
"assets/assets/images/tuto/main_creating_help_logic_bloc.png": "e317d75154b45fbc69a1e0b1735fa1bf",
"assets/assets/images/tuto/main_creating_help_logic_bloc2.png": "a89b3a169d6dd24b2bee6dc0e73d876f",
"assets/assets/images/tuto/main_creating_help_logic_bloc3.png": "caeced0caca8d289207377fe8d43ff32",
"assets/assets/images/tuto/main_creating_help_logic_bloc4.png": "f9e39513d1c6857bd1000a9be07ec442",
"assets/assets/images/tuto/main_creating_help_logic_trig_and.png": "62783513ae7953e3f6ff1bf1add8adc4",
"assets/assets/images/tuto/main_creating_help_logic_trig_and2.png": "263514c13dc882409aeecb41389ba16f",
"assets/assets/images/tuto/main_creating_help_logic_trig_normal.png": "69bfc9772f031644dbe7abb913de43a5",
"assets/assets/images/tuto/main_creating_help_logic_trig_spec_contact.png": "3504f560b7fb046de2b05317f54ca1a1",
"assets/assets/images/tuto/main_creating_help_logic_trig_spec_data.png": "8f65d587077919e16c182caf5b4e2712",
"assets/assets/images/tuto/main_creating_help_logic_trig_spec_design.png": "da88aa61200805f3430f26a867840362",
"assets/assets/images/tuto/main_creating_help_logic_trig_spec_score.png": "6e6f5f97d9a6d3cea7cc547f6ef2c627",
"assets/assets/images/tuto/main_creating_help_logic_trig_spec_timer.png": "8a643632bdabaec08f33668086fb283c",
"assets/assets/images/tuto/main_creating_help_logic_trig_what.png": "75fc13d6d0688528601bcb8beb641484",
"assets/assets/images/tuto/main_creating_help_logic_trig_while.png": "628e9f21176fa8f7ba3276b867b8c882",
"assets/assets/images/tuto/main_creating_help_tuto_ans.png": "0ba0eede2dc8c07ea6c8d432958c087d",
"assets/assets/images/tuto/main_creating_help_tuto_copy.png": "a3e2873a9c40b4f0b32d958f10592638",
"assets/assets/images/tuto/main_creating_help_tuto_del.png": "69cdee31a399ab389630e24ec158ad3e",
"assets/assets/images/tuto/main_creating_help_tuto_invi.png": "ec6b27a52ae536683448341bc17f0747",
"assets/assets/images/tuto/main_creating_help_tuto_start.png": "f9ccb2db2fa39ca9a8c4fd25efff79d9",
"assets/assets/images/tuto/main_creating_help_tuto_start2.png": "d72ecc31dd755e9c872be3585a220094",
"assets/assets/images/tuto/main_creator_help_continue.png": "5a55168b8f387898638032e63fdb484b",
"assets/assets/images/tuto/main_creator_help_copy.png": "a50dea51feaf7da1e68a00b4408cb663",
"assets/assets/images/tuto/main_creator_help_del.png": "c0a3b6de06e6d7a2acac91804e905984",
"assets/assets/images/tuto/main_creator_help_new.png": "c60bc5e11e61b3c1df6698511d48dbe8",
"assets/assets/images/tuto/main_creator_help_template.png": "b05a69010dc86d7284c65def2d36eaa5",
"assets/assets/images/tuto/main_explore_help_cat.png": "24c62d42567c406dfa95ad01165c5212",
"assets/assets/images/tuto/main_explore_help_creat.png": "e93559b81fb6503862104f1fda6d4be4",
"assets/assets/images/tuto/main_explore_help_search.png": "8ac6327b2a5431e4a2bd99b0d4eb7380",
"assets/assets/images/tuto/main_homeFeed_help2_create.png": "552ed45caad48437f8c64b830bfe456f",
"assets/assets/images/tuto/main_homeFeed_help2_login.png": "84bdaf98e9fd98053596c8e741d14b08",
"assets/assets/images/tuto/main_homeFeed_help2_nav.png": "cfe88915bcc5b7ef629833449b6b41f8",
"assets/assets/images/tuto/main_homeFeed_help2_search.png": "7295588cb8f77eb2bf2a38ce67be6a4d",
"assets/assets/images/tuto/main_homeFeed_help2_share.png": "1f3f2fee47cba5829b9d251974f0f48c",
"assets/assets/images/tuto/main_homeFeed_help_what.png": "55f80c8e7ecf058833a9324083f0706b",
"assets/assets/images/tuto/main_homeFeed_help_whoareyou.png": "648b8ee37d45c857b85a8b4915972b5a",
"assets/assets/images/tuto/main_settings_help_credits.png": "0e83b3d6c946f7e06d54f292c0c49e46",
"assets/assets/images/tuto/main_settings_help_del.png": "a541deee86448acdda6959c9e27807a5",
"assets/assets/images/tuto/main_settings_help_info.png": "1a9c1e6b9c9bc735f37fdae9cefee579",
"assets/assets/images/tuto/main_user_help_fan.png": "b8f2f81540fc6ff88e63d1e94ae1aebd",
"assets/assets/images/tuto/main_user_help_playlist.png": "5506cfaf4ef3833701d342dda9c72521",
"assets/assets/jsons/myGameExample.json": "6d47e31abc3455da455aaabd208c632d",
"assets/FontManifest.json": "eca3b0700f8c5b04ce1c1c54d21d8767",
"assets/fonts/MaterialIcons-Regular.otf": "8109c6f8c20632d5d3838511d171e13d",
"assets/NOTICES": "d7eb02410366a7e56d3046464c902fbb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/2.0x/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/2.0x/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/2.0x/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/2.0x/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-black-logo.png": "fd557bc349d7b0ac2dc09bdf89903362",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-logo.png": "f3482792f84398f4879483d8d3159d54",
"assets/packages/social_login_buttons/lib/assets/3.0x/facebook-logo.png": "d23205c8421608e83f9f7c420f3e2e89",
"assets/packages/social_login_buttons/lib/assets/3.0x/github-logo.png": "93f12731517d2d6ad022935490d84e88",
"assets/packages/social_login_buttons/lib/assets/3.0x/google-logo.png": "a6b32c1f07fa2fc81ce254986b971691",
"assets/packages/social_login_buttons/lib/assets/3.0x/microsoft-logo.png": "d00462accd7b9bc230de54830c4b47a1",
"assets/packages/social_login_buttons/lib/assets/3.0x/twitter-logo.png": "27294190740a30f2b76ee5257f39ad74",
"assets/packages/social_login_buttons/lib/assets/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"auth.html": "641eb099d07632db2937e4e1546cf161",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "a832d2a5590021bb9ac22562d0217e58",
"cors.json": "72a0a758a5a9fee3897ea1d62a003055",
"favicon.png": "b82113e3a4be6050416975a68534d5b6",
"firebase-messaging-sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "398c16524a636abeb97ebc98bee6455e",
"icons/Icon-512.png": "a00952fc8973a750155bba558cfd35fc",
"icons/Icon-maskable-192.png": "398c16524a636abeb97ebc98bee6455e",
"icons/Icon-maskable-512.png": "a00952fc8973a750155bba558cfd35fc",
"index.html": "05df3fc7ca11b88c46fe3c3be9bad085",
"/": "05df3fc7ca11b88c46fe3c3be9bad085",
"main.dart.js": "b007a480e50d265877b215e1e67824f4",
"manifest.json": "a17aa4a5cff47820ac80b22004b57289",
"privacy.html": "80ca1cc64be406b77599a2bf457bdb85",
"splash/img/dark-1x.png": "0093b06038caccc83639c774837a35cc",
"splash/img/dark-2x.png": "717c4eb749b31e606693898caf1821f7",
"splash/img/dark-3x.png": "c49e0b73c85de1c84c3a7121495e8117",
"splash/img/dark-4x.png": "3ba3f28a5a0d8f54e43912d106ec08f4",
"splash/img/light-1x.png": "51de83ba156c9afe8457b5b12b574468",
"splash/img/light-2x.png": "02d54a54a5fbb52ac4c22455afe23e8a",
"splash/img/light-3x.png": "59cf82161e65df40c215041bd3f59515",
"splash/img/light-4x.png": "9b10ac6b48600dbb134d7fae899bdc9b",
"termsofservice.html": "952ca8cb65543e925d8052accc7a453b",
"version.json": "6bb08eb278594de927aa9f32c306c68e",
"_config.yml": "a312b655c4ec691e1f92bf26611023b0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
