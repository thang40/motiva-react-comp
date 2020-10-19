import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import MTVTable from './table.comp';

export default {
  title: 'Example/Table',
  component: MTVTable,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<any> = (args) => {
  const [data, setData] = React.useState([
    {
      firstName: 'attraction',
      lastName: 'fairies',
      age: 14,
      visits: 66,
      progress: 54,
      status: 'single'
    },
    {
      firstName: 'ray',
      lastName: 'shoe',
      age: 14,
      visits: 93,
      progress: 32,
      status: 'single'
    },
    {
      firstName: 'faucet',
      lastName: 'application',
      age: 23,
      visits: 1,
      progress: 8,
      status: 'relationship'
    },
    {
      firstName: 'middle',
      lastName: 'mice',
      age: 0,
      visits: 97,
      progress: 79,
      status: 'complicated'
    },
    {
      firstName: 'toes',
      lastName: 'beast',
      age: 10,
      visits: 97,
      progress: 66,
      status: 'relationship'
    },
    {
      firstName: 'tiger',
      lastName: 'increase',
      age: 20,
      visits: 14,
      progress: 20,
      status: 'relationship'
    },
    {
      firstName: 'apartment',
      lastName: 'rifle',
      age: 15,
      visits: 97,
      progress: 39,
      status: 'relationship'
    },
    {
      firstName: 'sir',
      lastName: 'walk',
      age: 26,
      visits: 46,
      progress: 14,
      status: 'single'
    },
    {
      firstName: 'opinion',
      lastName: 'setting',
      age: 25,
      visits: 96,
      progress: 77,
      status: 'complicated'
    },
    {
      firstName: 'contract',
      lastName: 'tennis',
      age: 18,
      visits: 99,
      progress: 45,
      status: 'single'
    },
    {
      firstName: 'patch',
      lastName: 'point',
      age: 25,
      visits: 10,
      progress: 46,
      status: 'single'
    },
    {
      firstName: 'addition',
      lastName: 'cousin',
      age: 5,
      visits: 95,
      progress: 58,
      status: 'relationship'
    },
    {
      firstName: 'oil',
      lastName: 'underwear',
      age: 26,
      visits: 63,
      progress: 14,
      status: 'relationship'
    },
    {
      firstName: 'girlfriend',
      lastName: 'beggar',
      age: 20,
      visits: 67,
      progress: 39,
      status: 'single'
    },
    {
      firstName: 'increase',
      lastName: 'preparation',
      age: 22,
      visits: 23,
      progress: 6,
      status: 'relationship'
    },
    {
      firstName: 'error',
      lastName: 'client',
      age: 24,
      visits: 26,
      progress: 35,
      status: 'single'
    },
    {
      firstName: 'idea',
      lastName: 'star',
      age: 18,
      visits: 38,
      progress: 26,
      status: 'single'
    },
    {
      firstName: 'desire',
      lastName: 'request',
      age: 13,
      visits: 30,
      progress: 41,
      status: 'relationship'
    },
    {
      firstName: 'gold',
      lastName: 'dock',
      age: 0,
      visits: 14,
      progress: 40,
      status: 'relationship'
    },
    {
      firstName: 'van',
      lastName: 'face',
      age: 26,
      visits: 29,
      progress: 49,
      status: 'complicated'
    }
  ]);

  const handleEdit = (rowIndex: any, columnId: any, value: any) => {
    // We also turn on the flag to not reset the page
    console.log(rowIndex);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
          };
        }
        return row;
      })
    );
  };
  return <MTVTable {...args} data={data} onEdit={handleEdit} />;
};

export const Primary = Template.bind({});
Primary.args = {
  columns: [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName'
        },
        {
          Header: 'Last Name',
          accessor: 'lastName'
        }
      ]
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age'
        },
        {
          Header: 'Visits',
          accessor: 'visits'
        },
        {
          Header: 'Status',
          accessor: 'status'
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress'
        }
      ]
    }
  ]
};
