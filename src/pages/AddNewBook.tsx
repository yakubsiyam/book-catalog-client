import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { IProduct } from '@/types/globalTypes';

import { useState } from 'react';

export default function AddNewBook() {
  const [scheduled, setScheduled] = useState<boolean>(false);

  //! Dummy Data

  const products: IProduct[] = [];

  //! **

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-lg w-full"></div>
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl mb-2 text-center">Add a New Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Title</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="name">Author</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Genre</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="name">Publication Date</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Image Link</Label>
            <Textarea id="name" className="mt-2" />
          </div>
          <button className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Your Book
          </button>
        </div>
      </div>
    </div>
  );
}
