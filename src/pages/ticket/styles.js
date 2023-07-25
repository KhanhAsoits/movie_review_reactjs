import { styled } from '@mui/material'

export const TicketStyle = styled('div')`
  padding: 10% 5% 5%;
  position: relative;
  height: auto;
  background-color: #1b2330;
  position: relative;
  padding-bottom: 50px;
`

export const TicketBody = styled('div')`
  position: relative;
  height: auto;
  background-color: #1b2330;
  position: relative;
  .ticket-dateTime {
    padding: 1.5rem 0;
    border-bottom: 1px solid #aaa;
    .ticket-date {
      width: calc((100% - 4.4%) / 12);
      margin: 0rem 0.2%;
      :first-child {
        margin-left: 0;
      }
      :last-child {
        margin-right: 0;
      }
      p {
        color: #aaa;
      }
      .btn-ticketDate {
        width: 100%;
        cursor: pointer;
        border: 0;
        :hover {
          p {
            color: #4475f2;
          }
        }
        .date {
          margin: auto;
        }
      }
    }

    .active {
      p {
        color: #4475f2;
      }
    }
  }

  .ticket-address {
    padding: 1.5rem 0;
    border-bottom: 1px solid #aaa;

    .ticket-Address {
      width: calc((100% - 2.4%) / 6);
      margin: 0.2%;
      padding: 5px auto;
      .btn-ticketAddress {
        width: 100%;
        cursor: pointer;
        padding: 10px;
        border: 0;
        :hover {
            background-color: #e3ebfd;
          p {
            color: #4475f2;
          }
        }
      }
      .active {
        background-color: #e3ebfd;
        p {
          color: #4475f2;
        }
      }
    }
  }
`


export const TicketBranch = styled('div')`
.TicketBranch {
  padding: 1.5rem 0;

  .TicketBranch-item {
    width: calc((100% - 2.4%) / 6);
    margin: 0.2%;
    padding: 5px auto;
    .btn-ticketBranch {
      width: 100%;
      cursor: pointer;
      padding: 10px;
      border: 0;
      :hover {
          background-color: #e3ebfd;
        p {
          color: #4475f2;
        }
      }
    }
    .active {
      background-color: #e3ebfd;
      p {
        color: #4475f2;
      }
    }
  }
}

`
