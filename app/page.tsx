import PortfolioDisplay from "@/components/Portfolio";
import Hero from "@/components/sections/home/Hero";
import { client } from "@/services/sanity/client";
import { PORTFOLIO_HOMEPAGE_QUERY } from "@/services/sanity/queries";
import { Viewport } from "next";

export const metadata = {
    title: "Moja Strona",
    description: "Opis strony",
};

export const viewport: Viewport = {
    themeColor: "#a71938",
};

export default async function Home() {
    // const result = await client.fetch(PORTFOLIO_HOMEPAGE_QUERY);
    // console.log(result[0].mainImage);
    return (
        <>
            <Hero />
            {/* <PortfolioDisplay portflios={result} /> */}
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus cupiditate repudiandae temporibus non sed maiores illum
                quibusdam accusantium molestiae, officia odio quidem, natus ex
                debitis, voluptates optio cum atque sapiente harum ratione
                magnam enim. Doloremque voluptatum temporibus recusandae impedit
                eligendi, natus in ipsum quo culpa sed deserunt ipsam, odio
                voluptates repellat dolores rerum quisquam reprehenderit
                molestias dolorum minima quaerat nobis fugit laborum? Dicta quae
                rem quidem corporis distinctio esse labore sint in dolorum?
                Dolor quia minus aliquid quam libero est aspernatur, similique
                nulla a sequi rerum illo esse praesentium hic voluptatum
                deleniti ab ea alias veniam. Sapiente dignissimos pariatur et
                mollitia accusamus, alias omnis delectus quae, recusandae sunt
                nam rem possimus consectetur optio assumenda officiis at ratione
                eveniet maxime labore ipsum, maiores minus qui rerum? Neque
                molestiae soluta facilis, vero aut sed nobis! Quas error minima
                tempora expedita commodi obcaecati, aperiam harum atque sapiente
                fuga, possimus, quo iure? Illum non voluptatem et, veritatis
                minima quaerat atque aliquam ducimus rerum unde dicta saepe
                maiores eius exercitationem deserunt. Obcaecati sunt qui
                architecto blanditiis illum culpa, inventore corporis velit amet
                deleniti vel fuga numquam porro ipsam! A quis minus, distinctio
                voluptatum repellat eum veniam facere obcaecati magnam culpa,
                autem provident sed ipsam ipsa quibusdam! Placeat sequi ipsum
                iusto tenetur excepturi, accusantium reiciendis optio dolorum
                distinctio sed quibusdam autem blanditiis saepe libero numquam
                dolores vero impedit culpa doloribus pariatur! At, quis maiores
                sint numquam quisquam incidunt aut, unde quas veniam autem
                dolore tenetur necessitatibus eius nesciunt sunt ab accusamus
                facilis maxime reiciendis. Provident perspiciatis dolore,
                eligendi nihil debitis, quidem dicta voluptatum illo nulla iure
                quas? Dolorem debitis explicabo laborum officia? Nihil
                distinctio accusamus accusantium cumque rem, quae dolorem ex
                labore soluta sint reprehenderit doloribus, quia in ducimus
                fugiat placeat aliquid alias eligendi? Eaque est sequi in nemo,
                quas commodi. Provident blanditiis sit sapiente non perferendis
                eum fuga amet laboriosam nostrum nihil, quasi corrupti, vitae
                animi harum sed officiis. Blanditiis quasi sed ratione nemo
                harum ducimus quibusdam, voluptatum cum, officia deleniti nulla
                quo optio dicta at amet explicabo illum voluptas? Repellendus,
                tenetur quo earum aliquam tempore laboriosam aperiam cum eius
                nostrum maiores quaerat amet dicta, impedit quia est adipisci
                eum odit et dolorem sint unde quae rerum! Hic accusamus porro
                ullam dicta praesentium ad. Architecto quisquam excepturi eaque,
                dignissimos quia, doloribus harum qui molestias eveniet hic
                praesentium nam, ducimus non perferendis distinctio placeat
                inventore nulla! Atque officiis quos dignissimos voluptatem
                debitis corrupti natus blanditiis, aliquid cupiditate inventore
                amet sed, nemo quo! Consequatur, quae quis voluptate nam quam
                ullam facilis obcaecati, molestias animi, eveniet fugiat
                possimus architecto reiciendis. Enim consequatur, eum, ullam
                labore nostrum consectetur nesciunt exercitationem voluptatum
                illo ex harum atque neque assumenda aperiam. Nostrum possimus
                quisquam voluptates quas. Veniam id nobis velit ab rem!
                Repellendus debitis culpa sequi nobis nostrum facilis ratione
                sit, similique, in animi explicabo quos et exercitationem velit
                alias pariatur. Ipsa eos fuga recusandae. Quae est fugit at
                mollitia, quod dolorem, vero consequuntur eum enim fugiat
                incidunt, excepturi consequatur aspernatur dignissimos esse
                facere officiis. Similique, expedita. Ab, quisquam. Beatae
                voluptates aliquid libero deserunt ipsa nesciunt, minus alias
                sit iusto impedit, corrupti placeat, obcaecati eum. Quia labore,
                sunt iure ullam in reiciendis minima, autem tempora, soluta
                veritatis molestiae fuga optio quod dolorem voluptatem aliquid
                laudantium voluptate nulla. Cum magni ea odit necessitatibus, ad
                vero quae blanditiis earum dolores totam nesciunt harum ab
                dignissimos ex consequatur iusto? Necessitatibus ipsam
                blanditiis temporibus! Aut impedit maxime numquam qui iure
                aperiam voluptatum nulla, possimus reiciendis porro vero, nemo
                facere fuga veniam libero non, cum ipsum accusamus velit.
                Incidunt perspiciatis id assumenda dolor minus iste
                reprehenderit necessitatibus molestiae maiores excepturi
                adipisci, eum nam. Accusamus sit possimus sed! Veritatis
                molestiae, reiciendis in, obcaecati cumque ut ducimus voluptas
                consequatur corrupti suscipit, porro autem recusandae omnis eos
                molestias veniam voluptatibus dignissimos expedita ea illum
                error. Incidunt, sunt illum vitae laborum ea aliquid officiis
                iusto rem adipisci? Eveniet perspiciatis qui sequi earum dolore,
                aliquam repellat impedit unde molestiae itaque cupiditate ea
                possimus iste doloribus molestias ab nesciunt debitis aspernatur
                laboriosam laborum commodi quasi amet pariatur. Sequi, totam
                reiciendis provident fuga at quam? Aut suscipit id sapiente
                illum voluptatibus nesciunt, provident sit minus quod temporibus
                blanditiis libero corrupti quos, neque, harum amet quae
                assumenda tempore? Hic, explicabo voluptatem? Aliquam, vitae
                itaque! Fugiat quaerat quis minus provident veritatis id est.
                Alias, eligendi ea. Quas, adipisci. Optio, veniam minus! Autem
                sint sed fugiat voluptatem optio officiis blanditiis voluptas.
                Id cupiditate, in velit, tempora quas ea a earum dignissimos
                dolores omnis aspernatur obcaecati inventore ducimus similique
                nobis, voluptatem molestiae quis accusamus reprehenderit ipsam
                eligendi minus. Rem culpa vel natus expedita alias dolorem
                repudiandae, nemo, numquam suscipit neque deleniti laudantium
                itaque corporis perspiciatis nam eligendi minus quasi deserunt,
                sint debitis. Molestias dicta officia nostrum! Recusandae
                doloremque possimus eos voluptatem ipsa corrupti cumque quae qui
                voluptatibus delectus voluptas corporis explicabo consequatur
                consequuntur distinctio rerum sunt, itaque repellat at
                blanditiis aspernatur asperiores autem dignissimos nisi? Sed
                placeat, distinctio natus dolor officiis doloribus hic ducimus
                nostrum tempora et similique ea vero adipisci aperiam itaque
                laudantium fugiat voluptatem vel, sint corrupti eveniet impedit.
                Sunt voluptate corrupti exercitationem sequi tenetur molestiae
                maiores assumenda aspernatur obcaecati animi aliquid velit
                suscipit sed pariatur nulla nostrum esse molestias, consectetur
                recusandae alias nam ullam veritatis, sint explicabo. Facilis
                blanditiis sit delectus quas perferendis repudiandae ab eum,
                tempora debitis, quis architecto fuga corporis incidunt commodi
                consectetur ipsam dolorem. Iusto, repellat reprehenderit?
                Delectus libero animi quibusdam repudiandae odio neque ducimus,
                cupiditate dolorum, reprehenderit ipsum soluta doloremque
                sapiente officia at recusandae quo exercitationem esse,
                repellendus provident veritatis beatae nisi deleniti! Atque,
                excepturi velit repudiandae corporis impedit optio sit quo rem
                doloribus libero incidunt modi sequi in quae laudantium
                voluptates, ratione reiciendis sapiente nihil dignissimos
                adipisci. Cumque eveniet excepturi fugiat molestiae ut minima
                obcaecati aperiam optio, quod, eos velit perspiciatis enim
                asperiores explicabo eaque pariatur voluptatum. Consequatur, et!
                Consequatur facere, culpa delectus eligendi voluptatum
                laudantium non id consectetur laborum, magni ex quo eum illo
                doloremque nulla at qui labore. Excepturi eaque, soluta, earum,
                quam necessitatibus temporibus unde vitae voluptatem incidunt
                voluptatibus veniam in repellat omnis corrupti voluptas
                laboriosam itaque ullam vel perferendis debitis? Praesentium,
                eaque laudantium? Numquam id nemo incidunt aperiam eum minima
                alias optio et animi corporis molestias distinctio, aut libero
                ea delectus sapiente quis architecto ut autem corrupti illum
                saepe. Necessitatibus quibusdam esse sint cum accusamus? Sint
                temporibus unde debitis eaque dicta non quas similique libero
                ratione natus id praesentium maiores saepe sit magnam corporis
                ipsa delectus earum, esse laborum pariatur velit harum.
                Pariatur, molestiae. Dignissimos laudantium officiis, fuga
                voluptatibus odit asperiores est, cum culpa eum vero non,
                pariatur vel veniam corrupti placeat laboriosam necessitatibus!
                Et similique, rem assumenda consequuntur officiis eligendi
                voluptas natus quae vel magnam quidem temporibus cupiditate non
                quis, labore id eius dolores optio autem. Amet cupiditate eaque
                esse temporibus aliquid, corporis perferendis, aliquam
                consequuntur ullam velit molestias saepe fuga dignissimos, eius
                sint est ad doloremque harum deleniti error. Nobis temporibus
                esse vero laudantium ut quae, adipisci ipsa voluptates eligendi
                at! Delectus eum neque qui voluptates! Similique tenetur quae
                non pariatur optio deleniti architecto voluptates tempore?
                Eveniet dignissimos dolorum, nam facilis consequuntur commodi
                asperiores nihil voluptatum quas ratione eius quaerat fuga
                eligendi totam at amet iste numquam ducimus excepturi officiis
                doloremque natus corrupti enim! Blanditiis, minima libero non
                eum cumque facere id quasi voluptatibus eaque excepturi esse
                distinctio fugit omnis error natus placeat. Doloremque quos
                natus nihil quibusdam iste quisquam distinctio numquam dolore
                facere iure repudiandae ipsum quae perferendis commodi
                dignissimos possimus modi tempora deserunt aliquid voluptatum
                recusandae dolorem quasi, voluptate non? Fuga debitis quasi
                consequuntur, aut vitae rem minus deleniti placeat molestias
                corrupti illum quae in totam dignissimos impedit nesciunt quos,
                voluptatibus ad expedita minima soluta temporibus! Aspernatur
                mollitia saepe necessitatibus, quisquam amet nobis aperiam quos
                repudiandae ad laboriosam placeat culpa facere unde assumenda
                impedit, vel sunt illum minus. Quae ab iure beatae iste delectus
                deleniti corporis blanditiis ipsum rem architecto voluptatum,
                quia illum suscipit quibusdam ex libero eos at enim adipisci
                recusandae quas assumenda! Suscipit, corrupti. Aspernatur
                reiciendis explicabo aperiam nobis mollitia neque adipisci
                fugiat aliquam veritatis at ipsam incidunt, vel inventore magni
                numquam culpa quibusdam dolore recusandae ab? Tenetur voluptas
                blanditiis voluptate fugit nobis dicta nulla aliquam
                exercitationem officia beatae veniam, illo mollitia? Velit
                excepturi natus fugiat vitae, minima nemo quis doloremque
                aspernatur autem reprehenderit? Aspernatur dolore libero rerum
                molestiae impedit doloremque blanditiis ducimus itaque dolorum
                dicta autem a incidunt assumenda quis, odio recusandae dolor
                deleniti cum laudantium repellendus expedita eaque, quos quae.
                Libero magnam accusantium, tempore a impedit provident repellat
                pariatur accusamus commodi voluptate voluptatem natus et veniam
                at repudiandae nisi animi! Id, excepturi sit, illo maxime natus
                voluptatum voluptates ducimus et, iure sapiente placeat! Fugiat
                ullam sint distinctio, dolores ducimus maiores suscipit error
                necessitatibus quaerat pariatur odit dolore alias cumque
                nesciunt. Eligendi maxime porro alias iste iure culpa
                consequuntur accusamus, explicabo mollitia, vitae minima illum
                sapiente perspiciatis nemo veniam laudantium ad sint.
                Consequuntur inventore accusantium vitae cupiditate cum sequi
                molestiae deserunt suscipit eum autem harum sit, quisquam, aut
                quis illum. Iusto sequi placeat atque illum dolorum, libero
                similique voluptas quod est at, veritatis nulla assumenda,
                quidem a animi possimus accusantium optio amet ipsam earum non
                repellendus harum deserunt voluptatum? Possimus delectus
                doloremque beatae animi maxime expedita, quo modi aut minima,
                dolor eaque labore in, sapiente dolorem ipsum deleniti
                reprehenderit fugiat illo voluptatem a eius itaque porro.
                Temporibus repudiandae eum vero magni. Deserunt quam repellendus
                fugiat recusandae. Modi ipsum reiciendis architecto earum totam!
                Deleniti quod architecto tempora laudantium suscipit magni fugit
                nostrum odit. Blanditiis fuga dignissimos omnis? Beatae
                voluptas, est iusto sint dolore molestiae quam mollitia,
                dignissimos esse impedit sunt culpa ab. Modi quas culpa eius
                molestiae? Voluptatibus alias, repudiandae explicabo magnam
                ipsam voluptate ullam, nihil reiciendis commodi laborum
                architecto dicta aperiam iusto necessitatibus fuga laudantium
                nulla, cupiditate odit saepe quae eum! Sapiente sunt placeat
                libero neque reiciendis ab necessitatibus consectetur! Accusamus
                praesentium, dignissimos, eos recusandae vel aperiam tempore
                temporibus error ratione rem voluptas culpa repudiandae
                laudantium id ipsam. Quos ipsum cupiditate doloremque eaque
                aperiam. Magni beatae ex minus accusamus quis praesentium cumque
                doloremque vitae nostrum? Distinctio asperiores ea debitis
                explicabo, recusandae corrupti iste temporibus ad fugit officiis
                quod dolore, fugiat maiores ullam quidem animi culpa eum
                quisquam veniam tenetur voluptatum, quas quos! Eum quam maiores
                ad amet possimus tempore sit nesciunt quaerat doloribus! Commodi
                laboriosam ratione voluptatem? Placeat explicabo omnis doloribus
                iste dolorum, non repudiandae modi numquam facilis accusamus
                odio iure ullam deserunt ad eos ex accusantium neque eius
                praesentium reiciendis in alias. Qui, placeat! Corporis cumque
                quas, accusantium ut totam laudantium ab! Illo excepturi
                asperiores molestiae quis minus. Architecto, quis eligendi
                eveniet culpa laborum rem maiores pariatur dicta commodi totam
                accusamus minus quisquam natus ratione provident, explicabo
                harum consectetur quod id eaque sapiente porro! Quaerat impedit
                nobis cupiditate alias, aliquam, corporis totam rem aperiam
                ducimus iure quo hic? Exercitationem voluptatibus laborum, sunt
                qui, aut voluptatum rerum nihil harum eaque tempore laudantium.
                Tempore hic est minus obcaecati cupiditate cum saepe eligendi
                necessitatibus reprehenderit! Numquam unde itaque consequatur,
                totam quasi quibusdam exercitationem quam! Molestias quod hic
                modi nihil amet deleniti. Ipsa rerum delectus ipsam numquam,
                perferendis, nemo consectetur veritatis mollitia velit, illo
                quas laborum commodi. Quod aperiam vel, explicabo illo
                aspernatur animi tempora facilis laborum amet veritatis. Fugiat
                deleniti ex animi excepturi, consequatur sunt, debitis nemo a
                veritatis, fugit soluta aperiam asperiores? Officiis
                voluptatibus consectetur a animi quis in dolorem. Aperiam, nulla
                repellat in pariatur numquam facilis necessitatibus repellendus,
                nemo quisquam assumenda ullam. Tempore, architecto. Beatae
                provident libero vitae, officia architecto placeat ex ratione
                nam sint explicabo voluptatem unde aliquam obcaecati? Blanditiis
                nemo corporis aliquid corrupti. Atque quisquam aperiam minima ut
                nesciunt error modi voluptatibus perferendis. Voluptate, unde
                molestiae nihil assumenda voluptatum mollitia nostrum ipsam
                autem sunt perferendis ad maiores dolor, facere laudantium
                consequuntur voluptatem nobis debitis vero? Ipsum eaque iure ad!
                Harum voluptatibus assumenda natus, soluta nemo provident
                mollitia! Recusandae aliquid nam reprehenderit dolores facere!
                Quas, eligendi fugiat! Atque earum molestiae rerum adipisci fuga
                cum? A, enim neque, architecto tempora nemo deserunt explicabo
                ducimus nam illum maiores dolorem dolores tempore, rerum aliquam
                sapiente magnam ea corporis rem debitis nostrum velit qui quam?
                Cumque rerum molestiae vel deserunt facere dicta perspiciatis,
                magni debitis. Itaque dolores incidunt, sequi at ab, harum
                laboriosam dolorem repellat asperiores officia modi saepe alias
                corrupti in vel porro, ducimus nulla neque mollitia. Odio iure
                corporis harum magni distinctio quas aliquid voluptas nulla
                fugiat praesentium totam incidunt nesciunt laudantium ab
                deleniti ullam, minus vero cupiditate impedit. Temporibus nulla
                eaque quasi distinctio voluptatum ad molestias, perspiciatis est
                corporis fuga saepe, deleniti commodi? Quidem, sed. Architecto
                ratione, amet eos dolorem quisquam, ad exercitationem esse
                perferendis distinctio expedita adipisci, dolores nisi? Fugit
                aspernatur consequatur labore aut voluptatibus. Cupiditate
                commodi harum dolorem, repellat ex minus, facere deleniti ullam
                aut nulla deserunt! Quibusdam accusantium, inventore ratione
                beatae delectus corporis corrupti sequi assumenda enim totam
                fugit temporibus deleniti, atque accusamus esse ut, qui modi
                porro. Reprehenderit recusandae laudantium natus quam, nobis
                sequi totam assumenda quae quos harum in, itaque doloremque
                similique quod porro vero quis voluptas voluptatem distinctio
                nostrum iusto. Rem culpa corporis dolor architecto libero optio
                deserunt nihil ipsum omnis at recusandae cumque, incidunt,
                veritatis possimus dicta minus dolorum quos fuga sunt? Incidunt
                nostrum repellat unde tenetur in delectus non ex, assumenda
                deleniti illo nesciunt quae sed perspiciatis magnam, adipisci
                aspernatur! Recusandae quae ullam eos nam nostrum distinctio
                temporibus laudantium at. Architecto vel suscipit cum
                reprehenderit laboriosam. Facere a iusto eum eligendi voluptatem
                ex quaerat accusamus, provident minima rerum enim odit harum?
                Neque praesentium fugiat minus numquam dignissimos nam pariatur
                nemo eligendi quaerat placeat. Ut necessitatibus quaerat dicta
                possimus cum illo earum sint modi excepturi blanditiis provident
                optio dignissimos temporibus porro, tempora quos, tempore animi
                magnam perferendis soluta repellat atque? Ab voluptates
                cupiditate dicta laboriosam tempora accusantium explicabo
                provident animi, est, praesentium nemo in omnis maxime autem
                magnam architecto! Consequatur asperiores voluptatibus et
                dolorem, rerum similique quae amet quaerat sed dolores
                consectetur suscipit unde doloribus voluptas perspiciatis,
                placeat ratione eius? Quos officia et blanditiis deserunt
                molestias! In ad ducimus vero doloribus pariatur repudiandae,
                nemo itaque odio facere dicta qui, ipsam labore dolorum sed cum
                nesciunt voluptate et porro quo magnam neque! Adipisci
                repellendus fugiat incidunt laborum iusto aliquid eius facere
                voluptatibus totam at delectus optio in, recusandae eligendi,
                quis rem ut ullam? Aut debitis magnam nihil! Officia, dolores
                non suscipit laborum nobis provident reiciendis facere maxime
                asperiores fugit error, nisi eos. Ratione error, facere maiores
                quo reprehenderit veritatis architecto alias ullam sint
                perferendis culpa deserunt! Sint quis aspernatur, atque pariatur
                dignissimos sed iusto consequuntur molestias, dolorem et rerum
                obcaecati tenetur. Ab ea velit nam, laborum voluptate molestiae
                voluptatem eum dolor harum molestias optio, similique aliquid
                omnis voluptas soluta ut sunt adipisci provident tempore ipsa!
                Obcaecati eos alias, odit porro minus dicta quam perspiciatis
                iure nostrum ipsum adipisci quod eaque labore fuga repellendus
                assumenda excepturi. Praesentium, excepturi ipsa sunt cumque
                voluptatem eius blanditiis ipsum quod consequuntur modi ut
                distinctio. Officia quas adipisci sequi. Sunt, sequi pariatur
                natus soluta inventore nisi saepe repellendus possimus eum
                asperiores mollitia quis suscipit autem nihil iure
                exercitationem molestiae esse repellat nulla? Animi eveniet
                incidunt corrupti nihil maiores asperiores eius illo accusantium
                dolore quas aspernatur possimus ad, mollitia quis earum id
                commodi voluptatibus laboriosam odio! Facere porro doloremque,
                odio quam laudantium odit deserunt velit iure commodi nobis
                atque nam perspiciatis architecto omnis maiores repellendus
                minus enim placeat ratione nihil necessitatibus sed dolorem
                voluptates? Blanditiis sequi suscipit, quas accusamus obcaecati
                quos deserunt eaque dicta dolores at voluptatibus provident
                facilis totam saepe labore? Saepe eveniet, ipsam recusandae
                dolores tempora deserunt modi inventore quisquam, quibusdam
                impedit accusantium error tempore enim voluptatem nostrum est
                in. Sapiente cum, nihil culpa cumque earum blanditiis unde
                praesentium nesciunt voluptate doloribus consequatur
                consequuntur, corporis error repellendus est ex iste molestias
                dicta fugit mollitia! Beatae aut placeat quod impedit facere
                optio quia amet ratione repudiandae ut a sed sunt, quibusdam,
                laboriosam adipisci voluptatum excepturi nemo possimus explicabo
                soluta! Obcaecati quaerat in temporibus ipsa et doloremque eum
                reprehenderit non ea consectetur dolore quasi dolorem, alias
                necessitatibus corrupti deleniti velit eaque distinctio hic
                beatae esse pariatur? Eveniet suscipit maiores nostrum
                consequuntur nulla, repellendus consectetur, aspernatur dolores
                eos voluptate asperiores harum rerum odit, facere aut.
                Praesentium officiis asperiores minima velit deleniti assumenda
                harum mollitia nulla qui blanditiis reprehenderit sapiente alias
                quo adipisci tenetur, ipsum veritatis perspiciatis fuga?
                Molestiae iure porro cumque quia mollitia a. Excepturi eos in
                doloremque fugit totam et rem accusamus unde incidunt dolorem
                voluptatum natus odio culpa doloribus, nobis labore sed tempora
                corrupti officiis commodi magni dolorum architecto obcaecati?
                Autem itaque facere ea ad corporis. Eaque accusamus, dolore
                labore blanditiis debitis enim perferendis nulla fuga dicta
                natus quam maxime reiciendis, molestiae tempore architecto! At
                voluptatem magnam id officiis eaque est amet aut quam,
                recusandae facere sapiente, et quidem. Itaque quidem id ipsam
                assumenda totam temporibus quaerat repudiandae quisquam, maxime
                maiores voluptatum dolore modi voluptatibus natus laudantium
                nihil tenetur laborum unde veniam. Illum amet temporibus iure
                quaerat quisquam dicta minima earum. Saepe vel fuga at quia
                magni, a eum! Autem quaerat pariatur cumque voluptatibus tempora
                quo fugit minus beatae, obcaecati blanditiis dolores labore
                dolor animi. Repellat, iure repellendus. Eveniet minima quis
                suscipit doloremque labore accusamus possimus ex quo, eius
                blanditiis. Nobis voluptates, cupiditate tenetur vero velit
                repellendus iure quas eveniet enim. Sint excepturi placeat
                necessitatibus, iusto aperiam qui deleniti temporibus totam et a
                voluptas nostrum? Incidunt error doloremque libero aliquid?
                Error sunt quisquam architecto et, corrupti eligendi officia
                velit! Iusto amet placeat quo est ullam nam nulla provident id,
                dicta iure, perspiciatis possimus delectus cumque reprehenderit
                eveniet, maiores quidem qui porro quis vel nesciunt
                necessitatibus quibusdam rem. Dolorem ipsum provident et
                nesciunt, voluptates odio veritatis dolore ipsa aliquid nisi
                laborum praesentium! Perspiciatis deserunt earum quisquam, quae
                ea fugiat vero tempora reiciendis ipsam repellat mollitia
                sapiente! Impedit, quo blanditiis doloribus omnis inventore
                fugit magni autem reiciendis voluptatibus nostrum facere modi!
                Voluptas adipisci qui assumenda. Tenetur consequuntur sequi
                culpa dolore nostrum magnam praesentium officia accusantium nam
                eos deleniti quos quasi ea, nobis odio ad molestias magni
                blanditiis eveniet placeat dignissimos! Quas saepe voluptates
                repellendus dolores nesciunt quaerat beatae libero id?
                Consectetur vitae quo at distinctio tempore enim incidunt natus!
                Eius animi quis tempore voluptas ab eligendi quod totam iure
                pariatur veniam!
            </span>
            <div className="z-10 h-[300vh] bg-neutral-600" />
        </>
    );
}
