import React from 'react'
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

// import { GoLocation } from "react-icons";
// import { GoLocation  } from 'react-bootstrap-icons';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>

      <header>

        <Navbar bg="white"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxERERMQFhEWGBIVFxYVFRUVFRMVFRUWFxgXFhYYHSggGB0lHRUVITEjJikrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICUvLi0tLS0tLS0tLS0vLS0tLi0tLSstNy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAABAwIDAwgFCAgFBQAAAAABAAIDBBEFEiEGMVEHEyJBYXGBkTJygqGxFCNCUpKywdEWNWJzorPh8CQzQ1PCFTRjg9L/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADYRAAIBAwEDCwMDAwUAAAAAAAABAgMEESESMXEFE0FRYYGRscHh8DKh0SIjQgY0chQVU7Lx/9oADAMBAAIRAxEAPwDuKIiAIiIAiIgCIiAIiIAi8PeBvIHebLWlxGJu948Ln4LnUqwprM5JcWl5mVFy3LJuIop2ORD657h+ZWM7QR8JPIfmo/8AuFr/AMkfHPkdVb1X/Fkyihv0ji4SeTf/AKX1m0MB3lw72n8LrZX1u/5rxMu2rL+L8/ImEWhHi0Dt0rPE5fityN4cLggjsN1IhOM9YtPgcpRlH6lg9oiLY1CIiAIiIAiIgCIiAIiIAiIgCIiAIiIAsM07WC7iAP73cVlKpuJSXnkJ+sR4DT8FBv7t21NSSy28fbJIt6HOyazjBOy4y36AJ7d3u3rWkr3uB1t3f3dRUblsA6LyF1yldVXrNpdUdF9tX3tk5W1OHR4nh5vvWJyyuWJyhx6yRExvWJyyPWJxXeMl1nZIxuWJyyuKwuXeLRukYnIyVzDdrnNPFpI+CPXhy7rR5Oq10JKl2knj3uDxwcNfMa+d1N0O1cL7CQOYePpN8xqPJUx6xuU+je1odOeOvucKljQqfxw+zT2OqQzNe0OY4OadxBBB8QsyoWxExFSW3NnMdp1XBab281fVfW1bnqe3jBRXVvzFTYznpCIi7kcIiIAiIgCIiAIiIAiIgCIiAKg1D7yPP7TvvFX5c6lPTf6zviVS8tLNOHF+hZcmrWXA24nKRoqZ0l8ttLX7LqKicrFs0dJPZ/FUFpawr3EaU84ed3YmyVdScIOSMsWDfWd4AfitmPC4h9G/eSVvIvWUuTrWl9MF36v7lRKtUlvbNdtKwbmMHshZRGOA8l7UMcYNyMg0JG9ZubuhaJOo8Z3aN7uCMQpyqbtSVMLTva3yCwvoInb44/sha9LiJe8Ny2v29iklm3uKF3Byp6pPGqa1712hqdN43EPPs9Tu3Nc0/suPwNwour2TP+nID2OFvePyVsRZnZUJ74ru08jrC7rQ3S8dfM5pX4bLCbPYR2jUeYWg5dHxA9Pw/JQtZg8UmoGV3Fv4jcvK160aNedJrRPGfyW1C+zFba8PwQ2yTrVsfbnH8Dj+C6MqLguEyQ1sRIuy7+kN3+W/fwV6XouS5qVFuLys+iIXKkoyqxcXn9PqwiIrIrQiIgCIiAIiIAiIgCIiAIiIAuc1wtUSjg9/3iujLnuPsy1cw7QftAH8VU8rxzSi+30LPkx/rkuz1PMblYtmH9KQdjT5E/mqvE5T+zMlprcWkeVj+CpbH9N1Tfb5pomXkc0pFrReXOA3pnHEea9gUB6VQkd0nd5+KtuccR5qlyP6Tu8/Fef/AKgWacOL9CfYrLl3EphTvnWePwKsSrGDu+eZ4/Aqy5hxC3/p+OLaX+T/AOsTleLFTuPSL5dAr0ikTXu+cPh8FgBSqfd7j2n3aLwCvn949uvUl1yfmWUFiKN2h1ePH4KUUZhg6RKk16fkKOLTPW3+PQh1/rCIiuTiEREAREQBERAEREAREQBERAFSNtI8s7XdTmDzaTf3Fqu6re21PmgbIPoOF+52nxyqHf09uhLs18CZYT2K8e3Tx98FUjcpLC58ksbuoOF+46H3FQ8TltxOXlnmMlJb08+BfVIbScX0k/t0f8j/ANn/ABVZYVY8XpZKyGmdE0OLQ8O1AseiOs9hUczZuq/2x9tn5qzvKMq1V1IRbTSa0z0Ii2lWFOgoSkk1nKz2s1mOWeN62G7PVP1B9pv5rRBsSDvFx5Krq206f1Raz1rB224VPpafB5N5j1sMctSkjdI4Nbq47hu6rqTbhM31f4m/mo3+iqVVmEG+CycKk4x0bS7z4xym6B9oc3DMfJRbcMl+r7x+a2pbxwBjtHEn81L5Mt6tnWnWnTcUoS1axrmOFqQK7jUSimnr1mkHL2CsIK9AquxoSGiXwpujj228lILWoY7Rt8/NbK91YUuatoQfV93q/u2VVR5k2ERFLNAiIgCIiAIiIAiIgCIiAIiIAtTEKcSwyRn6TSO49R8DYrbRYaTWGZTaeUcnaC0kHQgkEcCN62I3KR2vouaqc4HRk6XtDRw+B8VExuXk7ik6c3F9B6qFRVYKa6fnmW7ZSqsXRHr6Te8bx5W8lZ1zmjqCxzXt3tIIV/pagSMa9u4i/wDRW/JNfapuk98d3D23cMFJyhR2J7a3Pz+amdc1md03+s74ldKXLp3fOP8AWd8SscrrMYcX6HXktZc+71JvZ13+Jj9r7rldlQ9mHf4qL2vuOV8W3JCxRl/l6I5cpLFVcPVhV7FZ88hA3N08ev8AvsUtiFRzcZd17h3lVoFR+Wbj9Korp1fdu++vcjS0p5bn4GUFZqaPO9reJ93WtcFS2CQ73nuH4qltLbnq8afRvfBb/wAcWSq0tiDZLL6iL25UBERAEREAREQBERAEREAREQBERAEREBE7RYd8ogc0Dpt6TPWHV4i4XPI3LrKoe12Gc1LzrR83Idf2X9fnv81Vcp2+0ucXRv8AyW/JdfDdF9Oq49KIyJysmzWIZXc049F3o9juHiqrE5bcTlSU6sqNRVI719+z5xLC4oqpFxZ0pQ52cpiSTHqSSek/efFfcDxLnW5XH5wfxDj+al16mDpXEFPCa7UnjxPPN1aMnFNp9ja8iMpsFgieHsZZwvY5nHeLbie1SS+qCxvEN8TDr9I8Oxa1alK1puWEl1LTLEVOtPDbb7eo1MTrOdfp6I0HbxK1gViBX0FeRqzlUm5y3st4wUVsozxNLiGjedFaKeIMaGjqUXgdL/qHub+JU0vQck2vN0+clvl5e+/wK27qbUtldHmERFbkQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC1a6kbNG6N40I8j1EdoW0iw0msMym08o5dW0b4JXRv3jcepw6iF9jcrzj2FCpjsLCRurT/AMT2FUUscxxa4EOBsQd4K81e2roy03Pd+D0drcqvDL+pb/z83G/TTFjg5psRqCrlheItmb1B43j8R2KixOW7TTFpDmkgjrCj2l5K1n1xe9eq7fM43Vsqq7SzYxigjGRh+cP8P9VXLrw8HU6nievxQFZubp3Mtp7uhdXuYoUI0o4W/pZ7BW7htIZX2+iNXHs4d5WrSwOkcGt3n3DiVbqKlETA0eJ4niu1jZ8/Pal9K39vZ+fc5XVfm1iO9/bt/BmY0AWG4aL2iL05ThERAEREAREQBERAEREAREQBERAEREAREQBERAFCY/gwnGdlhKBoepw4H8CptFpUpxqRcZLQ3p1JU5KUXqcyALSWuBDhoQd4K2I3K3YzgzZxmFmyDc7qPY7iqlNA+JxY8EOHvHEHrC8te2c6D11XX+e3z6C9oXMK6039K/BtROWWOjMjgGbz1dXf2Lzh1I+Z1mjQbydw/vgrbRUbYm2G/rJ3laWPJ1SvLb3Q6X19i/O5cThcXCpaLeY8NoGwtsNXHe7j/RbyIvWwhGEVGKwkU8pOTy94REWxgIiIAiIgCIiAIiIAiIgCIiAIiIAiKs1O3FBE98b5nB7HOa4c1No5psRcMsVtGEpfSm+BrKcYfU8FmRa9FVMmjZLGbse1rmnUXa4XBsdQthamwRQOLbWUdJLzU8pbJYOsI5X6G9tWNI6lsU+P08lM6qY8mBocS7I8aM9IhpbmNuwLbYnhPDw+w05yGWsrKJZFW6HbWgnkZFHPd7zZoMcrQTwzOaB71ZElCUXiSa4mYzjJZi8ha1ZRslbleLjq4juPUtbGsago2NkqH5GOdkByvfd1ibWYCdzSseCbQU9aHGneX5MuboPZbNe3ptF9x3LWVNyg24/p4aGVUSlhPX7kjBC1jQ1oAaOoLKqs7b/Dhe85BF73hn0tv+grMxwIBG46jtBWzpygknHHdgxGpGf0vPfk9oiruIbZUNPK+GWYtkZYOAjldYkA72tI3EJGEpPEU3wEpxisyeCxItTDq5lRE2aIkxvF2ktc2442cAepecRxGGnZnmkZG3i42ueAG8nsCxh5wZysZ6DdRU6XlIoAbB0rhxEbgP4rH3KUwfayjqzlimGf6jwWOPcHDpeF1vKjUisuLxwZzjWpyeFJeJOoiLmdQiIgCIiAIiIAiIgCIiALjvKphfNVomA6M7b+2yzXe7IfNdiVR5S8L5/D3uA6cJEg9UaPH2ST7IUi1qbFVPr08SPdU9um+zU1uSrEudojCT0oXFvsPu5vvzDwV2JXF+TLEuYxBrCehMDGeGYdJh8wW+0uj7eYl8nw+dwNnvHNN43k6Nx3DMfBb3NJqvsr+W7v9zS2rLmNp/x9PY47tBXmrrJpW3POPswdZaLNjA7wG+a65iuHimwWaAfQgeCeLspLj4kk+K5zyb4Z8oxCMkdCEc4eF26MH2iD7K6rth+r6v8AdSfdK7Xckpwprox88PM42kG4TnLe8+/3OBtcQQQSCLEEaEEbiF3LYnHxXUrXOI55nQlH7Q3OA4OGvmOpcf2fwh1ZK6Fh6eR72cC5gBDT36hbex+OOoKtr3XEZ6EzevLffbi06+Y61JuqSqxaX1LXx/OPHBGtqjpSUnuenzhnwyX3le/7KH983+XItHkb9Gs74fhItzlZeHUEDmkEGVpBG4gxvsQtLkb9Gs74fhIokf7N8fVEyX92uHoyr8oeF/J8QlsLMl+dbw6d8w+0HeYXS+TvEvlGHxXN3x3id7Ho/wAJaonlZwvnKWOoaOlC6x9SSwPk4M8yoLkkxPJUy05PRlbmb68e8DvaSfYW0/3rVS6Y+mnkaQ/auWuiXrr5nU6upbFG+R5sxjXPceDWgknyC/PwElbVf+Wd/fYyO+Av5BdW5UMS5mgMYPSmcI/ZHSf7hb2lUuSjDOdrHzkdGFunryXA8mh/mEtf26Uqvh84i6/cqxpfPmDplbUxUNGXkWihYAB1kNAa1o7SbDxXEquqqcTqxe75pCQxg9Fg35W8Ggbz2XK6Lyu1BbRxxjc+QX7Q1rjbzynwUHyP0odUVEpGrGMaOznHEn+WlslToyq9Pv8AnyFzmpWjS6Pnp5m1T8lZLBzlTZ/Bkd2g95IJ9yp+0uz02HytbIQWnVkjbgOtv7WuGmnaF31aOJYXDUhrZ42SBpzAOFwDYi9vFc6d9UjLMtV3HSpZU3HENH3ld5ONonVlM5krs00Ja1x63sdfI49uhB7r9auCwU1LHE3LGxjG8GtDR5BZ1FqSUpNxWF1EqnFxilJ5fWERFobhERAEREAREQBERAFjljDmua4XaQQRxBFiFkRAfnnEaZ9FVvjGj4X9E+qQ5jvEZT4q1cpmPNqW0bIz0TGJz3yCzQe0AP8ANZeVvDMlRFUtGkjcjvXZqD4tNvYVFpYHTSRxN1e9zGN73ENHhqruns1VCq96+P7lJUzSc6S6ce32Or8lGF81SPnI6UztP3bLtb7858QrDth+r6v91J90qQw+lbDFHEz0WNawdzQAo7bH9XVf7mT7pVS585V2ut+pbRhzdLZ6kcx5Lf1kz1JPgFvcqOz3My/K4x83KbSAfRl+t3O+I7Vo8lv6yZ6knwC65ilCyohkhkF2PGU8ewjtBsR2hTbiq6VypdmvD5qQrekqtvs9rxx+aHEanHTLhsdI+5dFI1zDxjyPGU+qSLdhHBXDkb9Gs74fhIqBjGGvpKiSCT0mG1+pzTq1w7CFf+Rv0azvh+Ei7XKiqEtnc3nxaOVtJuvHa3rK8Ey/YpRNnglhf6MjHMPZcWv4b1wTD6h9FVseRZ8D+kPUcWvb4jMPFfodcY5UML5mvMgHQnaH+23ovH3T7SjWM1l03ufzyJF9B7Kmuj55nrlRxUT1jI2G7ImNtwLpAHk/Z5v3q98nWF/J8PjuLPlvK72rZR9kN8yuRYHQGqqoYNTzj2gnrDBq4+DQfJfoSNoAAAsAAAOACzd4p040lx+d+TFpmpUlVfz4sFE5X4CaSF43NlsezMx2vmAPFQ/I9UAT1MZ3vZG4dvNucD/MC6Jj+Ftq6aWB2geND9Vw1a7wIC4e01GG1gNsk8R3HVrgdPaY4f3dZt8VaEqS3+6fsYuM0q0avR/6foJROPY7BRMY+cuDXuyCzS43sTcga20+CqVPypw5BzkEok4MLHMv3kg+5UfaraOTEJg94ysbcRxg3y3OpJ63Gw8guVGznKeJrC+bjrWvIRhmDy/m87VhmMU9SCYJY5LWuGnVt/rN3jxUiqfyc7PupKUvlFppiHOB3sYAcjT26kn1rdSuCjVFGMmovKJNOUpRTksMIiLQ3CIiAIiIAiIgCIiAIiqfKRLPDQ/K6d8jXUskU72sNhNCx3zsbxuLcpLvZQEzjuDRVkXNTBxbmDhlNiCL6g9xI8VE4VsLR00zJ4xKXsJLcz8wBIIva3aVUNqdo5JP+q1kUtT8jpYaSFggm5nnJppI5XyNfldZzWPY3Vp0JGl7qVxPlKbBVSwiOJ0UMkUMhMxFQ4vy5nxQhhztZmF7uF7G25bqpNLZTeDR04N7TSydDWpiFG2eGSF98j2lrrGxsRY2K57DtjWU7cWmmijlbBWRwRMbJYjO6JgYOgBazw7MdSSQdBdSn6ZVEbcQbUQUsc9J8mNzU5adzam+UmV7AQRlNxluTYDetDdrOhK4JsZS0cwmh53OA5vSfcWdv0srIuax8pExi0poXzCtgorNlkbE/n2FzXtc+IOA3DVu7UXWWPbusBdztLTBkVZHRTFs7yS+RzQHxNMYu0B7T0iL36ltKcpPMnk1jCMViKwWbH9laauex8zXZ2gtDmOynLe9jxsb27ysuz2zkFCJBBn6eUuzOzeje1vMqG5RqmSlZSV8b5AymnYZ2Nc7K+nlIjkzMBs4tu0i4NtVCx7RzCaur2SQmF9THRU7ZpXtiDYWnnZY2MDjM5z7gBouQ062Czzk9nZy8dRjm4bW1jXrOmqH2g2egrmsbOHdAktLTlIuLEX4bvIKpUG309SykjhghFXUT1cPzjpGwsFIM0jyCwSagtswgG5N7WUhPtJXc5S0jaembWysnleHyudAxkLg0ZXMbdxdcaaZdb3WsZOLyt5tKKksPcSWB7HUtHNz0Qkz5S0ZnZgAbXsLb9FY1zzEdo5oKl0kkOWdmF1NUWCdz4g+KQdHK3oOv9e2a2i+M26qYbuq4IObdQPr4xC95cMmS8Ty4WN841G7t3rMpSk8yeTEYRisRWDoijMZwOnrG5Z42vtuOoc31XDUKu7GbV1FZO6GeEC8LZ2yxxVDIxdwaYXGdgzPGZpu3Qi+6y+cpOJD5A7mJhzjKmjY/m39JhdNHdjspu0lrtx6isJtPKMtJrDMUnJdSE3ElQBwuw+8tUtgmxdHSOD2ML5BufIcxaeLR6IPaBdUTauKX5VX1LxUVFPG64qKGuyy4cImNzxupswaXCzib3032vpLQxsxbFJop5ag0sNLSSQMZK+ATGoaXOncIy0lw0HAcF0lXqSWHJnONClF5UUdKRQmycbGUkbI6p1UxmZgmc5r3OyuIyuc3eW7uOmqm1yOoREQBERAEREAREQBERAFhqYGyMfG8XY9rmuHFrhYjyKzIgKnS7A0ceGSYY3nfk8hzPOYc4452uvmtb6LRu3BZpdjoHVLqgS1ced0cksUczmQzSRgBr3tGt7NF8pANtbqzIgKvUbFUz31Li6oy1EkU0kYk+bEsTmOD2i2hJjbfXcFlxLY6mqH1L386Hzmmc5zXlpY6lvzTo/qkZjxVjRAVVmw1KHZiahzjUQVZc+VznOnhBDXEnq11bu3WAAstuTZKlcJgQ+0tQyrf0j/AJzC0tI4DoN0U+iA08ToI6mCWCUXjlY5jxuu1wINj1HXeoX9CaQUtNTMEsbKZ3OQujkcyRjzmuc41N87r333VmRAVX9A6PmmxNE7cssk7JGzyiaOWQWeWy5s+o33JuvUuw1GYYYmtlj5nnCySOaVkwMpvJeUOzOznfcq0IgK2zYuiawMbFlYKeSjDWveBzEpzPbv9Im5zb7netl2zNKSwujzZKd1IA5zi0wOy3Y4E2N8o1Oqm0QEHgWy9NROc+ESl5a2PNJNLMWxsJLY2c445Wi+4LBVbGUUtV8qfETKXMkI5yQRvkjFmPfEHZHOHUSFY0QFZxTYSgqZXzSxPzSZedDJZY2TZd3OMY4Nf4hZsY2Qo6ssdLFZ7Gc218b5IXiP/bzRuBLN/ROmpVgRAaWFYdFTQshgY1kTBZrW7gN/ibkm/XdbqIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/Z" width="40px" height="40px" />{' '}
            <span className="text-h1">VNVC</span>
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className='nav-top'>
              <Nav.Link href="/hethongtrungtamtiemchung">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>


                TÌM TRUNG TÂM</Nav.Link>


              <Nav.Link href="/dangkytiemchung">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-calendar2-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                </svg>
                ĐĂNG KÝ TIÊM</Nav.Link>
              <Nav.Link href="/vaccine">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                ĐẶT MUA VẮC XIN</Nav.Link>
              <Nav.Link href="#blog">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>

                TƯ VẤN</Nav.Link>

              <Nav.Link href="/signin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="#007c7c" className="bi bi-person-rolodex" viewBox="0 0 16 16">
                  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
                </svg>

                ĐĂNG KÝ/ĐĂNG NHẬP</Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Navbar>
        <hr />


     <div className='nav-two'>
     <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
           
            <Nav className='ms-auto'>
              
              <Nav.Link href="/">TRANG TRỦ</Nav.Link>
              <NavDropdown title="GÓI TIÊM">
                <NavDropdown.Item to="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item to="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item to="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link to="#contact-us">Contact Us</Nav.Link> */}
              <NavDropdown title="TIÊM CHỦNG CHO TRẺ EM">
                <NavDropdown.Item to="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item to="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item to="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="TIÊM CHỦNG CHO NGƯỜI LỚN">
                <NavDropdown.Item to="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item to="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item to="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">BẢNG GIÁ</Nav.Link>
             

            </Nav>
            <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            

            </Nav>
            
           
          </Navbar.Collapse>

        </Navbar>
     </div>

      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
          <MDBContainer className='p-4'>


            <section className=''>
              <form action=''>
                <div className='row d-flex justify-content-center'>
                  <div className='col-auto'>
                    <p className='pt-2'>
                      <strong>Đăng ký nhận bản tin của chúng tôi</strong>
                    </p>
                  </div>

                  <MDBCol md='5' start='12'>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBCol>

                  <div className='col-auto'>
                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                      Subscribe
                    </MDBBtn>
                  </div>
                </div>
              </form>
            </section>


            <section className=''>
              <MDBRow>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Hệ thống phòng tiêm chủng</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Danh mục Vắc xin đa dạng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Trang thiết bị hiện đại
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Chuyên gia y tế giàu kinh nghiệm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Chủ động nhắc lịch tiêm
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Khách hàng</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Trẻ em
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Người lớn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Phụ nữ chuẩn bị mang thai
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Đăng ký thông tin tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Tra cứu lịch sủ tiêm chủng
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Cẩm nang tiêm chủng</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Lịch tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Những điều cần biết trước khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Những điều cần biết sau khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Quy trình tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Tiêm chủng trươc khi ra nước ngoài
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Liên hệ </h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Email: congtyvnvc@gmail.com
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Phone: 09929883992
                      </NavLink>
                    </li>

                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2021 :
            <a className='text-white' href='https://mdbootstrap.com/'>
              VNVC
            </a>
          </div>
        </MDBFooter>

      </footer>
    </div>
  )
}

export default WebsiteLayout