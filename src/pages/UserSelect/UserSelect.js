//----------Import Dependencies-----------
import React from "react";
import { Container, Button } from "@mui/material";
//----------Import Components-------------
//----------Import Styles-----------------
import { NavLink } from "react-router-dom";
import "../../styles/LoginAndUserSelect.css";
import "../../styles/styles.css";

export default function UserSelect() {
  return (
    // <Container>
    //     <div>
    //         <div className="centerText">
    //             {/* <span className='userSelectHeading'>Cervi Test</span> */}
    //             <img src="./images/logo.png" alt='logo' className='userSelectLogo'/>
    //         </div>

    //         <div className="centerText">
    //             <NavLink to={{pathname: "/login", userType: "patient"}}>
    //                 <Button variant="contained" className="loginPageButton">
    //                     I am a Patient
    //                 </Button>
    //             </NavLink>
    //             <br/>

    // <NavLink to={{pathname: "/login", userType: "doctor"}}>
    //     <Button variant="contained" className="loginPageButton">
    //         I am a Doctor
    //     </Button>
    // </NavLink>
    // <br/>

    // <Button variant="contained" className="loginPageButton">
    //     I am a Health Professional
    // </Button>
    //             <br/>
    //         </div>

    //     </div>
    // </Container>
    <div>
      
       <header class= "sss">

        <div class="klogo-left">
          <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEgQAAIBAwIEAwUDCQMKBwEAAAECAwAEEQUhBhIxQRNRYRQicYGhMpHRFSMzQlJiscHhFkNyByVTY3OCg6Ky8CY0dJPC0vEk/8QAGwEAAQUBAQAAAAAAAAAAAAAAAAECAwQFBgf/xAA2EQACAQMDAgMGBAYDAQEAAAAAAQIDBBEFEiExQRMiUQYUFRYyYUJScaEjM1NigZGxweHRcv/aAAwDAQACEQMRAD8A9xoAKACgAoAKACgAoAKACgAoAKAOE7UAIEgLcvNv5UB9xYNAHaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDhpGwItzf21rtcXCI37JO/wB3WnKLfYjlUjHqyMNWWYH2W1uZv+Hyj7zil2+rG+LleVDVzf6jFBLO9gkUUSl2Mk46DfoKSTjFNi01VqTUUupkeBdV1DUdX1aceE883K4ErkBEGwVcDpVCzr+NKTZ0WtWnu9Gmqf8An/k2niasoybe0b0ErD+VaHlOcbqrsJ9uv4zmbTnx5xShvpS4XZieJNfVEUNatFOJzLB/toyv16UmxiqtFk6GZJU543DoejKcikawSKSfQdFIOCgAoAKACgAoAKACgAoAKACgAoAKACgAoAST1/jQBXTaqpl8Gxja6l6EIPdX4t0FLjuROp2jyMNb3Fwpm1C9EUI6w2p5F/3nO5+WKVfYZzL63gjHUNG0uK5a2RHaFXaQoMnKgHBPwYU7EmMdSjDOBi716WSVrEKlsxbkeVveCApkHYjBPQH6Uqh3GTrv6Yji+03PBLC5RvaDaMrhtiSNifniq13/ACpfoaGmSe+nv9TC8OXB0rVIbrGIz7sg/dNcva3LpVcvodtqFP3ii49+x6SuqLLrSWERBXwPFZ/U4wPu3roY3EZ1difbJx7t3Gj4kvXBZnGKuFb7lLb6jeXlzc+Hbwm0t5vCIdsO5HU+QA+tPcFHBWVWUm+OENyjRpIJ7yC49nEaGR57duU8o7+RHypMtCYpyT5wSRLqNqSpKX8SbMVASUfEZwflijh/YfunH7r9ybZ39vdgiJ/fUe8jKVZfiDvTWsEkakZdCXmkJDtABQAUAFABQAUAFABQAUAFABQBEv72CzjDzPjOyqoyzHyA70qWRkpxj1Kzlmv2/wA4yC1iYcy2qvhsdy5/kKcuOhF9T87whi41u0gMdtYYhHOoZ3iIRUOcOOmRkYzS7G+WRuvGL2xIQ0i5nuLhrcMbdpo54JC2FIJIlTHkev8AvU7el0I3SlJ/bt/2TINE0nSGe6uph0dSZmAHI3YjvjpRunPhCqjQo5cmRZeKNAseaOziMxPXw4tjjpuanjZ1pdeCtPVbSHC5I83FU1wPHt7TMOGXwnf7f3VgXV3Cjeq3qPy45Nm1lK4sveKUfN2RRCDnPN4YTm35eoGe1cjcSjGrJQfGeDrLetOdKLnw8ckmxknsrmO5j3kQY97uvlUtreSp1ozZHdQjOjKKLeHjy25itzYzoQcEoytj+FekQspSgpxfXk87lrNOnNwnF8E+11XQNQlZ4p0SaT7SvlM7eR61FK3qw+pFmle2td8PkTccOCVIFjuGlhUJGyMBvCpzyjG2SQBv2pinjhksqG7vx3/QiWl9qGmMyT2vNcTg3dwpyx5mOBGmM7gADNGFLoJGcqbw+/JcB9O1fLwyDxUOFljOGXHke+/xFJ5oPkmTp1OO51Ly509xHqeHhLYS7QYUejjsfUbfCm4z0CMnD6i3VgQCCCKaTp5F0ChQAUAFABQAUAFABQAE4oAgalfpbckMama5l2jgXq3qT2HrTkskc544XUruRopnDOLjVWjLK3hlkhz0HoufmaXPH2Ifp/8A0VHjahrDxkrGk6O0Zi5f0Mi9UY90Yd/hipFiKIM1a36lolvp+g2sUt/cHEKukfOMkIxB5AOpxgAU2KnUeIodKdG2juqsz2rca3ExaLTIxDH0EjD3j8B2rQo2MU81DHudYnLy0eEZa4mmuXMlzK8rn9Z2Jq9GEY9EY9SpKbzJsbAxvTyLGXyafh9Fn09VA95GIavLfaqlOjfueOGei+zlzF2aprqiy9l8v4Vy3iHQKsJkgEaF2xhRk1Nb7qlWMF3ZHXuVClKTMZKeaV2Hck17hbQdOjGD7I8jrzU6sperGiNsYqbqRFnper6nYlvYppHRF5nRssoHmfIVWrUKUuvBeoXVxTXkeUayw4ttb9BFeJHa3R2R3GUJ+Pas6raTpvKNqhqlOsts+GcOkahaxpcRyACILFCkPvmKHqSMDdj54O1Q7ovhlzwZpbk+C9trlYbFBq0kMTSEgLK4ywz7oOepxUcuvBZjLENs+o0yy6QfFg5pdPO7xjLND+8vcr6fdSYyNadPzLoXEMqTRpJGwZWGQR0NNLCeVkcoFCgAoAKACgAoA4TgZNAEPUr9LOAHlLyuwSKIdZH7Af8Ae1OSyR1J7Vx1K1xLp6e0kpNqE7DKnPvDqUXy9M9+tLhSeOxC8wjnuM2sf5UuPyppl48BdfCuIXTJDDsR2YUrltjtYii6nnixOta3acPWyWtuoluuQBU6nAGMsakoW7rPnhFe7vqdrHbHmT7GF1dtSunivNQEj+KC0ZIPKozj5VrUvCj5Y9Uc3de8Skp1lwy4E2i/2ZEXhRe3keL4fMc8/TOfhviq7VZ189i74ln7nt43GYldU+0ck9FHU1e34MlQbf2BuZYWkKNkAnl70yrPbTcyShb+NWVPOMtL/YvTddk0+fxI4Cy4w0ZYYauR1dw1Cl4c4Ya78HZ6fos7Oe+FVf6Zdf24j2/zW3r+eWuV+Ax/M/2N9U5Y+tfuQ9U4ta9gMMVkYVPU+IpyPKtTStOp2VdVZ+bH6FO9s6txS8ONRLP6lXbTePkchTHTJBzXcWd667wo4OM1PSVYxTc92RRkUPyvlD2LbA/Or7kjJcGjS8N6xY6bbTQ3sAdpDjIjBIU9cnuPSqdxRnVknFmnYXdOhCUZrqUtnY3OrXZWKHmZ2BbkX3Uz3+FWJVI045kUIUpV6uIF3pms6jw5dex6jHI1uCcK/VQDjKnyqtUoU7iO+HU0KF7WsZunU6GpureLWIotQsLhOfwniVynNhW64H7W1ZuHB4kb3lrpVIMa0yDVXKTSzNbW0ShYreQDJUYBL/EZ+FD2dELTVT6pPCRKRk0xhd27B9NmOZCpyIif1x+75+XWmvnqPT2+ZdGXSOH+yQR6UwsIXQKFABQAUAB2oAbnlSKJpHYKqjJJ8qVDZNRWWVFqDNI+q3g5SVxAjf3afi3f5Cl+xBF/jkVEMs2savG0NyEeDmOUUhodxlJFOzBhmnyjtRDudWfDJnFOuppMHg2vKbubpgfZ9TUtvQ8V5fREV/e+BDbD6meeXMN5FKlzcGUSTASiU5yc981rQlTktsTl5qrF+JNclvrHEU2rWSWpiaMKQchs84xvzfOoKVsqc3LJcutQlXpKBQFmkYrDsB9qQ9vh5mrMm2UUkkmx2KFI8lRlj1Y9TSoHJsdCDG4GO9DipLAkZOLTj1RSahp7Qzc0URZG3HKucfGuK1aydvU3r6WerezutRvaPh1OJRIvgS/6B/8A2z+FY++PqdE5x9f+Dq2szsFED7nH6M1LRj401CJBcXVO3pOpOXCNBaWyW0IRAN/tYHeu8srWNrTUe55Fq2pSv7h1H07CmQMCCMg9j3q3gyk8PJHMLRbRHKn+7J/hQSblL6ibpGpPZXftFuAZFUrhsjBPmKjq01UjtY+jXlbVN8R65a717VfFWFjNJyghclV7Z9BRTcbeGM8D5ure1d2ORzSNSveG9RZZEdY2bEkTZAI/aFRVqca6zEltbirZVdsv8m31iBNf0y3eG4Y2TMDOkZx4iep9DuR3xWWs03hrk6abjcU1KL4DQ7m1Cm1jt2hhlJ8HnQKswCjJVew9KSWerCjJLyY4JVg5067GnOT4DjNsT2A6p8u3p8Ka1lEkf4ctvYuFOaaTnaACgAoA4aAKbUn9su1sgfzEQE10R5fqr8yCfgPWnpY5IJvdLaVOu3X5SmtYbfw5bbIIWSPnjdzkcj43XbocdafDhNtFevLxGlHoPXcdnw7p41CZOe7jTki948xz0Un9YDzPalhGVWaj2GXE6dpS8R9TBT3F5JdLfzNIJZJCyyEdcHfFbOyChsictKdWVVVpLqW3EPEP5YgSFITCiNnrkOMbZ/CoKFt4TyXLzUPHio4xgoG5pn8NSVRThnU7n0FWWUopRWWSUjUDlAAXyFKhj68i8elKAoLRkMDN6LoR5spHSXm6xuVP3isfV7aVxQUIrJ0Xs9c0Le5cq74KR9W1NWZG1C8DKcEe0P8AjXFSt1CW2UVn9EeoUoUKkFOK4ZLsptTu3jaS6uZYOf3ueZiPuJrV0qym6sa0I8GBr13ZU7edCS8zXQtyBuetdueW4wsCeWlEEMue1AmBmaDnIdCVlA2bz9DTRyeOGS9C1WXTrs3CIPFVSrRliBv3PmKjrUVVjhlqhcStZb4ocvnu9d1VpEhcu/RObmCbdM/I0RjG3hhsSq6l5V3xXJN4S1mTS70Wl1zLbTNj39vDbz+HaoLmiqkd8Szp11KhPw59GXWqtHZ6kJbeaeO5ZW95V8aV+4VQdlQ+lZ8ctcm3U8ssxLtpE1W0WESJHfIqyADcxSDzx/DyNRpNMsZ8SKXcn6Zd+2WqSEcsoysqZ+w42Yffmmsmpz3RyTKQeFABQAxdTpb28k0hwsalmPpSpZGyltWSilhu4dEeaOGWS6uXEk4hIDgHGeUnuFAAp+fMVpKXhZXVnOGbW0liS85JvaoiUZ5gVc+j9mOCN/Slq5zgLfG3ODJcZaq2oao0UTZhtjyr5Fu5rTtKO2GX1ZzWqXXjVtq6Ik6jrlndaFHaQxKlwoXL+EAM98eRplO3nGruZLcX1OdsqcVyZmVmz4cZw79D5Dzq9Iy6fqx+OMKioBsKEI8t5HVFKAsCkyOSFhaTI46AQc5ozgMGV1VPC1GcY2LZ+8A1wepLF3NHsGhVPF06n+n/AGX2jIV02LO3NlvrXU6TDZaRx3PPPaSqqmpVGu2CZy1ppmGcK0uRrQgigTA2w386UbgjXMZOHQYkXt+0PKmvrkki+MMteHNc/JUkkyo0wkUDw+bAznqfXrUFaj4yXYs2V07Wb3Lgg6rcyX97PcvzkM22ce6OoG1TUoKEVFla4rSrVHPsbfhm8j1vRJLW4ObmJfDZgxVsdjkb1k3NN0p5XQ6TTrhXFDbLqhfD0j296bZXheFlOVgtzHHEQdgCd2J8/SopcrJat3sm0mWqH2PWOv5q8HTykHf5j+FR9UT/AETf3LYHIppOdoAKAKrV8zta2YGRPJl89lXc/wAhTo+pDV82IkPU728kk8PRyH8PmWVwAwjbyK9ScdMbUqS7kc5zz5OwviDUH07h+S5cqLhlCDbq7bVJQg51EiG+rOjbuS6mQ4d0ew1LTbt7meQS55QeUe4R72Rnrmr9xVqUpqMUYllbUK1KUpy5KEgc2zNyjoXGDj19avZ4yzKlFKbSEW+ZCZiPt9M/s9qTqPm8cIlqPOlGjgFIKkOAU0dgcApM4zkck28Icgt5Jyyoo27k1nahqdvYwUqr6lu2s6lxJxj2MzxVbPb6iBIN5EGMd65W9vKN3U8ak+GekezlKpQs/DkuhprbT5orGL3QAkY6mte09oLJbLdPnocTf6fcVqlStjuNEb+ldJuXZpmHtx1ycIoyMG2FOQDbClGsQw2pRrIhHgzjGyS/Rv60nRkj88fujSwX2jpw7JBLbwm7dS/JgjmYdCT51SnCr42V0NKnXt1auLj5iv4X1D2DXIHJ5YZT4cg+PQ/fipbunvp/dFbT67pXK54ZsOJ7ZY50u3kwzARx4RpHBz+oo7+tZMHlYOnuI4xJFjfOt9pPtNpkvH+djyCCCp3UjseoxTVw8Ek3vp7l1LS2kWaBJUOVdQwprJoPKyO0g4KAKR5c6te3DMBHaQKgJ6Bj7x+nJ99P6RwVspzbYxpUWqW8sMM91Z3Fsc5YArJ/HftTpOLWUJS8RPnoUf8AlHvD41pZp9kAyt8eg/nV7T4dZGNrlXmNP/Jjo2YABWIAORg960Wk+pgqTxg5Pugj7ucfLv8ASkl0wSU1zlklRghfIYpcYGdx5aBw6tIKRtV1GHS7YTTAtzHlVFO7eeKq3V1C3jmRq6VpVbUq3h0/8vsctdRW9tFmhjkQOcDnrndY1PfQUKfDZ0mn6ErO6k6/Kj/yaXTIvBtBnBY7neuI1OrVlJQlnEf3LcNkpucVjPYpuL7Xx7nTcDcy+H8jil06eITRs2E8U5o0YTt1ArNhKSnmJlzcXlPuZ69T2a8OGBjY5xmuutL2pSq06sm8MilaU7u0lSiuV0Kk8QWq6gLCWOSJ+blLvgDPb5V2S1GDqKL7mJ8sXDtHcxaeOxasu5yK0UzmGscDbinDRlhTkNYxcxiSF17kZX40klkKb2yyMxuWjVsYJH3UseRKixJnGznqQexHanYGpuLyj1JWfVeH7W4jjWWdowQrOUBbo2SPnXP1I7KjidrRn41vGQ5oXiQwvaXcaJJG36mSrZyTgndj50yXqSUcY2se4fzHZvanGbWZ4gM590HK/wDKVpJ9R9HiO30LWmkxw9KAM2TFJpV885wt5duo97l25uQb/wC7Uncp8eHLd3YrRtOSy1SaI3VxOYogyCUhgoc7kHrnK96JSyhaNLY2smM41nM/EM++0YVPurXslikcxqs3K5f2KZdqtmcdAVrvAOyJ9TUecyJlxElKPpT2MHVFNHjd7eQafbNPcEKo+yCd2PkKr3FxChHMi/p2n1r+qqdJZ9fsYLVdSk1O98eUlUQ4WPOyrXL3NxKtU3Poev6XpNLT6DhD6u79WXMHEtuqpFBp0zIgCgK3b5CoKlvSry3NNmf7lXpN76sec9SyseKhE4MlvdwLncyoSv31WqWLkmmsr79StWs4S5UluXp/8NQl1bavFaXULo4hm5iFIPYiseWnVqM5KmuGinTuvd3KE+pX63xNBbu1vBI7kbERLzH6VbtdKlSX0+b16/6H0Lbx/NN4XZdDOS8SBSS+m3Zx+s4I/lWj7hFrNRSb/Y0IW7j5adWCRSa3qMGqTpNFC8MvKFfLD3sdD8anqShhbc5RpabY1KFOUJyTjI0HDnEC3KJaXsirOBiORjjnHl8a27G+UsRn1OJ9ovZuVGUri3WYvt6Ggb4Y9DWz+hxOMDTCnDGMuKBhET3ZZI/I8w+dIuB9RZSZ1qkREeg8FTrNw3LDITyxM6sRnIHXtvWJerFXPqdVpE3O2cX2E8MeyNqLIjWU8gTmEkEjSMnb3mbvUFTlZLdBLfgvbMeFrOoJ/pVimx64Kn/pFMfRE8OKkizHTemk4NSCMyF7OicJWqyNbKLkYZ7gFkAOT23qdfWUZtKgkWXCq6d7Bz6YI/ex43IxbD4GxJ36YplRtvknt9m3ynnnED+Jrl63+tIrdtlikjjb15uJMhLU3crILYfnZj+9j6UzuyaXEUiWop3XqJgtbLQ7+9tfaLVEKnIUlu+aqVLmnB47l+2satXE2vKU+pf5P9XupGudRuWkCg+7CuQg9POsepSVxP8AiTO0t9VWn0fDt6H+c5yNWHC+nwsv5h7iQHbnyd/8NXKdjQpR3Pkx7z2nv7nyxe3Poa+34dvVhUpbxoMfZzg1K61BdCg7W9qR3Nt/5IzxyQSGGUMrDqrVOtkllFCSq0niTaJNnpVzdR88MWFPQtsDUU6tGHDLdK0uKy3LIm70+4sseJFyqTjK9Pvp1OpCo/KMrUrml9ecDEUM10/hQIWJ647Cn1JQgsyIaUatSWIZyI1Tgw3cRe5sYZMdCuzj5iqVR2tbho2Lerqdm90JGQn4LtpJQltPLESeUIw5iD86ilpVLG6MsGpR9sbmK8OrBPsafTuEdet4vCuZY7hQPdYnDfOp6Fx4S2uWTK1K0jcy8ShT2t9eTmo6Re2ESyXSKFY4BBzk1cpXEKjxFmJcWdWjFSkupVvVopMiybXKH9pCPu//AGmZ8w5802B61KQo2XArzDSNRFqCZVkBUDGTt2zWTqC86Ok0Zy8KWPX/AKLXRPyg2pGSeG/jDs5kMxXwyM+6AB07VUnjCNKhv3ZawWbYTiGPYAyWrf8AKy//AGpn4Sxx4paDpTCY4elAjKzQFDaDYcyhvzCbH4Uss54IaKzTSZYRxpGDyIFB3OBjeky+5Ko4WEeQ65trV7/tmroLf+Ujh71YuJoiLUxVFW2/iN5uajRPU6klachEehcJhjw4gQ4Ys/KfI8xrEuceK8nV6Zn3bj7knSI9Qt4pfyrcJLvlDgDlHfcCo5uLa2omt1VhGXjPJUaFFDPr13OgBRCSnoSe31q1Xco0VEzbOnCpdTl2Q9q2q3FtrCor4gjALxgfaHeko0IypN9yW7vZ0rhRXQh6lfQarcwCGNo25grE98mpaVOdGLyytcVqdxUjhF3rUzWGmKtqfD3CKR2FU6UfEm9xpXk5W9FbCrm1mK403wLqNnlK4L7Yz2NWY2zhUymUal9Tq0dk08k/hmFI9OM4HvuTk+YBqG5k5VMFrTYbaPiEbQdTurvVZopnyhVmAx9nBGP406vSjGmmhtldTqV5RkQuIYUg123eMY8RkY/HmFTW7cqLTKd/CMbmO3uaPVIbyeJUsLoW7hslioOR8wao03FPzLJtXEKkoLwpbWYviUalbvHb6hfm5VxzqFQAKenYCtS02SzKKwc9qCrxeyrPd+xQPVwySHcbXNvjpzMP+U/hTX9SHfgkdPWpCFG6/wAmgza3rf6wD6Vlai/OjptCX8KT+5tT0rON4q7g/wDiO0/9LN/1JT/wsgf81FoCMUwnA0AQtJtXstPt7aQhjEvLkDAx2obI6cdsEiacYoJDyXiyHweILwEYDMGHwIrdtHmkjidSjtuZFYhqyyijtqfdcfvmmRJ6nVEpO9OERveGJ4k4cAMqq3v7cwB6msW4jLxuh02nVIq15fqZSS9u5RyyXMjL5FtjWjGjGPODDqXFaTacuCbw9fpp99zvtHIOVyewzUdzSdSPBZsLjwavPRmmuLCyvL2O+NypVcEqCMNjpms+NSpCOzBsVLe3rTVVyKjW7u2a7jSyVQI92ZB1Oat29OTi93czb6vTU14fYuWktNb08KZhG4wWAOCp+dVHGdGbwjT30ruilJkXUzYafp3gRiKSYrhTgE/GpaXiVKmWVrj3e3pbI8sa4c1OKKI2lwwQZyrbYOeopbqjJvdEbp13BR8OZMs7Cx0yee9a6GGB6ke6Cc1DKdSqlDBbo0qFvN1dxndR1AahrMUy/o1kRV+ANX4UnTpNGNcXHjXSl2NXqlvb6jEsbXng8pzlHG9Z1NyhLOMm/Xp060cbsGU4j0q2srdJY72Sdy3Lyu4O1XrWtKUsbcGJqFrClDKnlmbbFaJi4ZDuP09v6Fj9CP501x6EiXkkdNPXJCehf5OYimkyyY/SSn6Vj3z/AImDqNEhig2a09qom2QntXbVYrssOVIWjxjfJKn+VLngj2ZnuJopCQZumkSPniAJH6p71FVcoxzECuXXrUDE6yRsOu2RVWN9T6SXI/Yx6HWLS5DezMzlcZ2x1pal9TjHK5BQZneINCXWL4XQnMJ5ApAXOcd6fb686UNrhky7zSFc1N+7BXDg4ZGb1j/wx+NWPmP+wqL2fS/Gci4QVJHxqBYMcjEY/Gk+YJf0xz0HP4x4cKqD/wCcb4+GPxpPmJ/0xvwH+8cXhgL7wuz6Zi6/Wk+Y8fgH/AV+c6vDic3L7X73UjlGw8+voaX5heP5YfAl+YWeHggB9pznb7GP5035hf5A+BL8wtdBwMLcnfY+5SfH+foHrRWl9YfkJQADdYPb3Rv9aVa+2vLAT4J/eD6KiDma6IAOMlcUi17c/wCWOWhr84fkEHb2g9dhyf1oXtBjpAT4En+IDoAH9/keqf1pfmBv8Aj0JfnENoC5wLvPmMULX3jLph8Eb/Gc/s2p29qbr2T+tHzD/YItBX5xs8Mjcm7Ix1ytKvaDPCgHwBf1Dg4XVhk3hwehCA/zpX7RY42CPQV+cS3CinP/APYwx5x/1o+Y/wCwb8AX5xp+DlZ1YX+wBH6Lz+dHzC8/yxfgHla3nDwd5X5z/sv60vzG/wCmM+Xcr6zU6MItI01LZiSsSks+OvyqnLVVWqZmsGzbWfu9NQTJH5esGx4cjOfJVP8AOpJX1JLJNtY/ZXb3pLqnJCDj3uppaNeVZ5xhCNYJtWRCHd3sVuCDlmH6oqtcXUafA6MMmT1GXxpXk5QhbqBWNOW+WSdLCwK4bHvXPmAv86hl1DBd00XAZ/hSrjkOpkdY4ZuopLV+HZGt3Essk0kkxIyyMB17EnG3TOau0bqKT8QjaEtp/EJY+yuLJuZRBGZuaOGMQBSpx19/oakhVodwxLsJutL4omhf2O69lyUVEkmDso5CHcn/ABYIHpnvgIqtvnGA2zG30jiIXiXoCGWSCIXKJMMvh3LIOmw5weozvSqvQzt/UXEg1HSOILia0HO7PazxyxztIPDVRGRkr1LBznp0HypVUt8cCZYzYjX79mNoZWt4GRZFknB8VuQglW2zhyCRkfyp8nQglnqHJO4k0TVr630+OIyXDx2csM0iyKvNIygK2+B1HUb+VQ0LilHKYSi30OnRdXnspReSZnE9uYUWclORVj5+v7yvjO9L49FS4E2sjS22v2sKzXd06qkSm8zOAHPjZAVuikRjB6Dcb96WNSg3jANSHtGi1+4/J92zytA0hMqyygcsfiPjp72eUr2IOO3dtSVJRaXUVbhy90TVvH127sXUXU8itY5YZAwud+3RtvWkjXpYUZC8j13pmtJqjCwuilkFBhleXmMZw2QwO5ySOx28qKda3a5QmJESLS+IJdOihvGc5jMc0a3IwWKEeJz91yckeXbtTlWt+cCYYW2k8R21usMTKssSRrGyzDkVFgC+Hy/teICc9Md+1Ode2cstBgcs9I1hr8RajJK1rJIwb8/nMXgrkHyPikmopVaO3dHr/wCgos09naw2dvHbwAiNM8oLEnrVSc97yyTA+KZkXDGrsZtZh+4f4UnV9BOTM2bc2N+vpUnHoBrdL1KPwkikXkI2BA2NatteQSUJEUoluCCMjpWkmmsojESwxzLyyKGHrTZ04z+pC5aIE2h2UpyVcf4WqrKxpt5Hb2ItNAtLSQyQvNkjBy+xpHYUw3slmxj82I9TSe4Uw8RmJ13W9S0rVJLQxwFesbFTutaNvodtVhu5OfvNVuLeq4diAOLdR7RQD5Gp/l22+5UWu3HoidY6zql7GWhS1GH5AjZyTgnH0NQVNFtabw8lqlqt3VWY4GRxHqILKYI8gZOEOw86k+BW3r+5F8auU8NHRxHqA95oIwPMoelC0O2/MHxq69BwcQagdhAnXAwp60fArbHUFrV16L/RJj1bUJojN4cIABODkEheuKjlo1tF4yyeOp3co7sIj/2gvQvvJH5fYI+VPWiWvqRLWLjPK/YkzanqMXiFktz4eOYDJO4H41CtHtfUmepXWHwuAOpaoFQrHCxbOOQ5O3nT1o9q+4nxG79ENR61fyyBPDiycn3lOwHU0PRrZc5YyOrXLltwgn1nUYXMZhibGMlQSN9/4UsNFtnzliz1a5i8JJiG13UFh8d4olTJAyDn/vNKtFts4TYj1a6SzhCZ9d1GCXw3hhL4BHKpPUZoWi2sujYk9Wu4vGEMDiW/zkQxdSuOQ9fL4074HbepH8auvRf6ENxXfj+7hz/hNPXs/b+rGvXblPGF/oQeLr/P6OD7jS/L9t9xvx64zjCNXwtJd6pYm61BVQM2IggxkedZtzpdCE8RbN2wua1anvqFvcabFPC0TPIqtscGoPh9Mvb2RYeHLKLG8px0y1KrCkg3snwWVvAPzcYz5mpoWtKPRDXJskAYqxgQVSgFJgApQOYoAzvGWi/lTT+eFc3MPvJ+8O4qza1nTn9mZmpWnj08rqjzHO5yCCDgg9jW9lPlHIYw8PsTrS/kt7KSCFnVpHDFlbG2MEVWnR3yyyzSuJU4bY+uSfHrTCaSR4y4dyVBbYA590+Y3pjteMInjeYeZIl3OseGbcQ5IPK8qs2fP3frUUbfruJZ3kcrahtNbTILRO2CeUlh0Ocj4HIpVbSx1EV7FcbRqPUIjEiyW4YxyF48P0ye/nTvd2u5FG4hFYcej4HxrLEHxFYks2CCPsnt8u1N91z0ZLG9XeI5+Wz+rGynG2W27fhQrTHcd78l2OvrgPNmBhnfIbodqFaP1Flfp9EMTaiI7qNmVZEEXK6hvtcw96nKjug+cDJXaU8Y4C31aK2IWG1YKO3PnIyDk+u1Dtpy5bEhdRiuIizrSRRxEIzFRuObp0/Cm+6yXcdK8jw8DEms/mPDWBxgEZ8Tr7uMml91fXIx3qa+k6+vL4wl8BwcFSA+2Nzn479aPdn6ie+R3btpQu5Zi3mc1cSwjOnJyeSdoOly6vqUduoIjU80reS/1qK4qqjDOeS3Y2jr1VHsetW8KQxpHGAEQBQB2rBctz3HaQgoRUUO00eFAHaUAoAKAOUAFAHaAEuNtqAWMmE4z4cIZ9SsY8jrNGP4itG0ufwSOd1PTm34lNGMBGcjHpitbJzvORatSPkUttGjSRblwA0yCMxqQCMFveOD6D61Urp8L9S9axTy39v/AEnz6baeI8yyN4Tq7IFIx9ljt8MfWoVWntwW5WtNSyv1OHS7VvEIlcEAt1GNgx/+P1o94mkHudOTHZtIgE2TKwDSEbYHL72BjNCuJoJWdL1G7eygiuZ4438SUW6vEDync9euxIpZzk0m/UZToU4zlHrhDSabGyq7tJzlSXQcuQwxt9c/Cl94fYb7tB8tki3sLe3LJzLJzBCS6ggdelMlUm+SalQpxkooYbSLcDkE7h+mcjGeUn5janK4mRuzh6jF7psNtbTTc8mUblCtjr8B2NSU68pTSwR1baMIbs8lOTgY8qt4Rm5QgnHSlEHLK1mvrqO2tkLyvsB2HrTKtRU45bJ6NCVeW2B6nw/o8Oj2QgTeRjmRz+s34VhVqzqyydjZ2sbansXXuWwqEuHaACgAoAKACgAoAKACgAoASwByCBjFHcOOjMJxTwkwZ7zSlGDvJAB9VrStr3Hlmc5faU+alIxm6sVIII2INaqxjg5+SaeH1FA46bZpGk+oJtcj8lw8qxKW2jQIuB2HnUapxiSSquSwxPOfM/fS4QzdL1O8x8z99LtQ7dL1Dm9aMIN8lzkOY+Z++kwhN7znJzmI7n76MINzOF/Wlwg3MSXPXJzS4Qm6TWMiC2aUaSdN0661O4EFonM/c9lHmajq1Y0llli3t6leW2CPS+HdBt9Et8Lh7h/0kpG59B5CsStXlVfPQ62zsqdtHjqXQG1QF8KAO0AFABQAUAFABQAUAFABQAUAcIoEM/r3DFrquZUzBc4wJEGx+I71ZoXVSk8djNvNNp3KyuJGA1bQ9R0p8XMJaPO0qbqfw+da1O5p1OUzmrmxrW78y4K8GrCWehURbWWmJcWHi80njk7KMYwThSPPJ2O+1U6lw4Swi/RtY1IJrqM3en3MMpWOJ3TOzDB5hkgHY+YqSFeElyRVLWpF9CMYZwHJicBThiRsp9ak3x6ZIfDkucD0VjdSqkscRKOByucANk4AGT6GmSrQTwPVvVksqPBNj0VwH9skVOUA8uGGSw90c2/wOO9Q+9c4iizGyUXukyDqcMVtdGOBiycoOSc4JG4qelJyjlorXNKNOeIvghgM7qiKWbsAM5qRyiuWQxUpvEVk02jcG3l4RJqBNrCf1dudvwqjWvoriBsWmkVJvdU4RvdO0+1063ENnEsaD6/E1lzqSm8yOko0IUY4giYBTCY7QAUAFABQAUAFABQAUAFABQAUAFABQAUANyIrqVZQwPUHcULjoJKKfDWSi1PhHTL/AJmEZt5D+vFt9OlWqd3VhxnJnV9LoVecYKObg7U7X3tMvgwU8ypJldx0PlViN7TksTiZstJuKbzTlwRlsOI7UMDpolLqI3ZHU8yYIAG+R1Jpd9vLuMjRvaecxz/oii31lLT2b8jXI5chGAJwDjOc9elSb6O7fuIpUrpQ2KmKtrbX0gggt9KmAhUgFhjOW5snJxsSfvolKjubcuoU6V4oRgqfQWnDXEV6OS5jSGPm5iXkXJ+6k95t6f0j/cb2r9Swi0suA4wwN7eO4HVEGAfnUM9Qb4ii1S0Rdaksml0/RrHTlHstuqn9rGT99U51pz+pmtRtaNBeRFgo2qMsiqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA5gUAGKADHpQGAx6UBgMUAGKAO0AFABQAUAFABQAUAFABQAUAf/9k="
              alt=""
            />
            
        </div>
        <div class="kheadline">
            <h1>
                <span class="kbold" >CerviTester: </span> <span class="kunbold">A Smart And Portable Screening DeviceFor AI-Assisted Automated Diagnosis Of Cervical Cancer In Low Resource Settings</span> 
            </h1>
            
        </div>
        <div class="klogo-right">
            <img src="data:image/jpeg;base64,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" alt="Government Office Logo"/>
        </div>
    </header>
    <div class="kcontent">
        <div class="kcontainer">
            <div class="kleft">
                <div class="kteachers">
                <div class="kcard">
                    <div class="kimage">
                        <img src="http://www.pccoepune.com/images/deans/swati-shinde.jpeg" alt="Teacher 1 Image"/>
                    </div>
                    <div class="kinfo">
                        <h2 class="namek kbold" > PI<br/>Dr. Swati Shinde</h2>
                        <p class="pk">Dean Research & Innovation</p>
                    </div>
                </div>
                <div class="kcard">
                    <div class="kimage">
                        <img src="http://www.pccoepune.com/images/research/madhura.jpg" alt="Teacher 2 Image"/>
                    </div>
                    <div class="kinfo">
                     

                        <h2  class="namek kbold">Co PI<br/>Prof. Madhura M. Kalbhor</h2><br/>
                        <p class="pk">Assistant Professor</p>
                    </div>
                </div>
            </div>
                <div class="kproject-info">
                    <h3>| Project Description:</h3>
                    <p/><span class="kbold">AIM:</span>
                        To develop an AI based intelligent biomedical screening device that can diagnose the cervical cancer accurately and provides a cost-effective and affordable solution that can be quickly implemented in regions lacking capital.<br/>
                        <br/><span class="kbold">Objectives:</span><br/><br/>
                       - AI based Smart and Intelligent Biomedical Expert System<br/>
                       - Screening in low resource setting<br/>
                       - Integration of both Pap smear and colposcopy test<br/>
                       - Speculum free screening<br/>
                       - Automatic Segmentation of cervical cells<br/>
                       - Automatic reports generation by doctors
                </div>
            </div>
            <div class="kright">
                <div class="mx-auto">
              <h1>
                {" "}
                <span class="text-dark loginas  pt-0">
                  <h2>Login As</h2>
                </span>
              </h1>
              {/* <p class="lead my-4 mb-5 mt-2 pb-3">
                <span class="text-dark align-items-center ">
                  {" "}
                  Lorem ipsum dolor sit amet.
                </span>
              </p> */}
              <div class="  mx-auto" id="ggg">
                {/* <NavLink to={{ pathname: "/login", userType: "patient" }}>
                  <Button
                    class="btn btn-success btn-lg active" 
                    variant="contained"
                  >
                    Patient
                  </Button>
                </NavLink>
                <NavLink to={{ pathname: "/login", userType: "doctor" }}>
                  <Button
                    class="btn btn-success btn-lg active"
                    variant="contained"
                  >
                    Doctor
                  </Button>
                </NavLink> */}
                <button
                  class="btn btn-success btn-lg btt active"
                  aria-pressed="true"
                  onClick={() => {
                    localStorage.setItem("userType", "patient");
                  }}
                >
                  <NavLink to={{ pathname: "/Login", userType: "patient" }}>
                    Patient
                  </NavLink>
                </button>
                <button
                  class="btn btn-success btn-lg btt active"
                  aria-pressed="true"
                  onClick={() => {
                    localStorage.setItem("userType", "doctor");
                  }}
                >
                  <NavLink to={{ pathname: "/Login", userType: "doctor" }}>
                    Doctor
                  </NavLink>
                </button>
                {/* <a
                  href=""
                  class="btn btn-success btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  <NavLink to={{ pathname: "/Login", userType: "tester" }}>
                    Tester
                  </NavLink>
                </a> */}
              </div>
            </div>
            </div>
        </div>
        
        
        
    </div>

      
    </div>
  );
}
{
  /* <section class="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
          <div class="container mb-5 ">
            <div class="d-sm-flex align-items-center justify-content-between mt-3">
              <img 
                      class="img-fluid w-50 h-25 d-none d-sm-block my-5 pt-0 "
                      src="../img/more1.png" class="img-fluid" alt="" />
                      <div class="mx-auto">
                        <h1> <span class="text-dark align-items-center mx-5 pt-0">Login As</span></h1>
                        <p class="lead my-4 mb-5 mt-2 pb-3">
                            <span class="text-dark align-items-center "> Lorem ipsum dolor sit amet.</span>
                        </p>
                        <div class="d-grid gap-4 col-9 mx-auto">
                        <NavLink to={{pathname: "/login", userType: "patient"}}>
                            <Button variant="contained" className="loginPageButton">
                            I am a Patient
                            </Button>
                    </NavLink>
                    <NavLink to={{pathname: "/login", userType: "doctor"}}>
                            <Button variant="contained" className="loginPageButton">
                            I am a Doctor
                            </Button>
                    </NavLink>
                          
                          </div>
        
                        
                        
                      </div>
                      </div>
              </div>
            </div>
        
    
        </section> */
}
